import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'

interface SponsorFormData {
  companyName: string
  contactName: string
  email: string
  phone: string
  website?: string
  sponsorshipType: string
  message?: string
}

// Email configuration
const createEmailTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

// Google Sheets configuration
const createGoogleSheetsDoc = async () => {
  const serviceAccountAuth = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_ID!, serviceAccountAuth)
  await doc.loadInfo()
  return doc
}

// Telegram notification
const sendTelegramNotification = async (message: string) => {
  if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
    console.log('Telegram credentials not configured')
    return
  }

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'HTML',
        }),
      }
    )

    if (!response.ok) {
      console.error('Failed to send Telegram notification')
    }
  } catch (error) {
    console.error('Telegram notification error:', error)
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: SponsorFormData = await request.json()
    const { companyName, contactName, email, phone, website, sponsorshipType, message } = body

    // Validate required fields
    if (!companyName || !contactName || !email || !phone || !sponsorshipType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email notification
    try {
      const transporter = createEmailTransporter()
      
      // Email to admin
      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.ADMIN_EMAIL || 'contact@tingnect.com',
        subject: `TingNect Sponsorship Inquiry: ${sponsorshipType}`,
        html: `
          <h2>New Sponsorship Inquiry</h2>
          <p><strong>Company:</strong> ${companyName}</p>
          <p><strong>Contact Name:</strong> ${contactName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Website:</strong> ${website || 'Not provided'}</p>
          <p><strong>Sponsorship Type:</strong> ${sponsorshipType}</p>
          ${message ? `
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          ` : ''}
          <hr>
          <p><em>Sent from TingNect Event Landing Page</em></p>
        `,
      })

      // Auto-reply to user
      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: email,
        subject: 'Thank you for your sponsorship inquiry',
        html: `
          <h2>Sponsorship Inquiry Received!</h2>
          <p>Dear ${contactName},</p>
          <p>Thank you for your interest in sponsoring TingNect - Build for Billions!</p>
          <p>We have received your inquiry for: <strong>${sponsorshipType}</strong></p>
          <p>Our partnerships team will review your inquiry and get back to you within 24 hours with detailed information about our sponsorship packages.</p>
          <br>
          <p>Best regards,<br>TingNect Partnerships Team</p>
          <hr>
          <p><em>This is an automated response. Please do not reply to this email.</em></p>
        `,
      })
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
    }

    // Save to Google Sheets
    try {
      const doc = await createGoogleSheetsDoc()
      const sheet = doc.sheetsByTitle['Sponsors'] || await doc.addSheet({ title: 'Sponsors' })
      
      // Add headers if sheet is empty
      if (sheet.rowCount === 0) {
        await sheet.setHeaderRow(['Timestamp', 'Company Name', 'Contact Name', 'Email', 'Phone', 'Website', 'Sponsorship Type', 'Message'])
      }
      
      await sheet.addRow({
        'Timestamp': new Date().toISOString(),
        'Company Name': companyName,
        'Contact Name': contactName,
        'Email': email,
        'Phone': phone,
        'Website': website || '',
        'Sponsorship Type': sponsorshipType,
        'Message': message || '',
      })
    } catch (sheetsError) {
      console.error('Google Sheets error:', sheetsError)
    }

    // Send Telegram notification
    const telegramMessage = `
💰 <b>New Sponsorship Inquiry</b>

<b>Company:</b> ${companyName}
<b>Contact:</b> ${contactName}
<b>Email:</b> ${email}
<b>Phone:</b> ${phone}
<b>Type:</b> ${sponsorshipType}

${website ? `<b>Website:</b> ${website}\n` : ''}
${message ? `<b>Message:</b> ${message}\n` : ''}

<i>From: TingNect Event Landing</i>
    `
    await sendTelegramNotification(telegramMessage)

    return NextResponse.json(
      { message: 'Sponsorship inquiry submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Sponsor API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
