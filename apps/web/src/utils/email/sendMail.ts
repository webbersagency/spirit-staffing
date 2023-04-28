import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import { resolveAsArrayOrUndefined } from 'next/dist/lib/metadata/generate/utils'

export type EmailAttachment = {
    fileName: string
    data: string
}

export type SendEmailProps = {
    to: string
    subject: string
    html: string
    from?: string
    replyTo?: string
    text?: string
    attachments?: EmailAttachment[]
}

const MAIL_FROM = process.env.MAIL_FROM

const SMTP_HOST = process.env.SMTP_HOST || '127.0.0.1'
const SMTP_USER = process.env.SMTP_USER
const SMTP_PASS = process.env.SMTP_PASS
const SMTP_PORT = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 1025

/**
 * Email helper utility sending mail through Mailgun or nodemailer to Mailhog locally
 *
 * Example on how to call this function:
 *   await mail({
 *     to: 'user@website.com',
 *     subject: 'Subject line',
 *     html: layout(mailType, mailType, req.body),
 *   })
 *
 * @param attachments
 * @param data
 */
const sendMail = async ({ attachments, ...data }: SendEmailProps) => {
    const auth =
        SMTP_USER && SMTP_PASS
            ? {
                  user: SMTP_USER,
                  pass: SMTP_PASS,
              }
            : undefined

    const mailer = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_PORT === 465,
        auth,
    })

    const emailData: Mail.Options = {
        from: MAIL_FROM,
        ...data,
    }

    if (attachments) {
        emailData.attachments = attachments.map(({ fileName, data }) => ({
            filename: fileName,
            path: data,
        }))
    }

    // Send customer email
    await mailer.sendMail(emailData).catch((err: any) => console.warn(err))
}

export default sendMail
