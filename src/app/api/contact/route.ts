import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  inquiryType: string
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
    const body: ContactFormData = await request.json()
    const { name, email, subject, message, inquiryType } = body

    // Validate required fields
    if (!name || !email || !subject || !message || !inquiryType) {
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
        subject: `TingNect Contact: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Type:</strong> ${inquiryType}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><em>Sent from TingNect Event Landing Page</em></p>
        `,
      })

      // Auto-reply to user
      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: email,
        subject: 'Thank you for contacting TingNect',
        html: `
          <h2>Thank you for your message!</h2>
          <p>Dear ${name},</p>
          <p>We have received your inquiry regarding: <strong>${subject}</strong></p>
          <p>Our team will get back to you within 24 hours.</p>
          <br>
          <p>Best regards,<br>TingNect Team</p>
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
      const sheet = doc.sheetsByTitle['Contact'] || await doc.addSheet({ title: 'Contact' })
      
      // Add headers if sheet is empty
      if (sheet.rowCount === 0) {
        await sheet.setHeaderRow(['Timestamp', 'Name', 'Email', 'Inquiry Type', 'Subject', 'Message'])
      }
      
      await sheet.addRow({
        'Timestamp': new Date().toISOString(),
        'Name': name,
        'Email': email,
        'Inquiry Type': inquiryType,
        'Subject': subject,
        'Message': message,
      })
    } catch (sheetsError) {
      console.error('Google Sheets error:', sheetsError)
    }

    // Send Telegram notification
    const telegramMessage = `
🔔 <b>New Contact Form Submission</b>

<b>Type:</b> ${inquiryType}
<b>Name:</b> ${name}
<b>Email:</b> ${email}
<b>Subject:</b> ${subject}

<b>Message:</b>
${message}

<i>From: TingNect Event Landing</i>
    `
    await sendTelegramNotification(telegramMessage)

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
