import nodemailer from 'nodemailer'
import { MailgunMessageData } from 'mailgun.js/interfaces/Messages'
import Mail from 'nodemailer/lib/mailer'

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

const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN
const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY
const MAIL_FROM = process.env.MAIL_FROM
const isMailgunActive = MAILGUN_DOMAIN && MAILGUN_API_KEY

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
    if (isMailgunActive) {
        const formData = require('form-data')
        const Mailgun = require('mailgun.js')
        const mailgun = new Mailgun(formData)
        const mg = mailgun.client({
            username: 'api',
            key: MAILGUN_API_KEY,
            url: 'https://api.eu.mailgun.net',
        })

        const emailData: MailgunMessageData = {
            from: MAIL_FROM,
            ...data,
        }

        // if (attachments) {
        //     emailData.attachments = attachments.map(attachment => ({}))
        // }

        // Send customer email
        await mg.messages.create(MAILGUN_DOMAIN, emailData).catch((err: any) => console.warn(err))
    } else {
        const mailer = nodemailer.createTransport({ host: '127.0.0.1', port: 1025 })
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
}

export default sendMail
