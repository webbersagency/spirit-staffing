import { type NextRequest, NextResponse } from 'next/server'
import { message, sendMail, table } from '../../../utils/email'
import { ContactFormSchema, contactFormSchema } from 'ui/components/ContactForm/schema'
import * as fs from 'fs'
import { EmailAttachment } from '../../../utils/email/sendMail'

export async function POST(req: NextRequest) {
    const { attachment, ...data }: ContactFormSchema = await req.json()

    console.log(data)

    try {
        await contactFormSchema.validate(data)
    } catch (error) {
        return NextResponse.json({ error }, { status: 422 })
    }

    const subject = 'Contactformulier'
    const to = process.env.MAIL_TO || 'development@webbers.com'

    await sendMail({
        to,
        subject,
        text: `${Object.entries(data)
            .map(([key, value]) => `${key}: ${value}\n`)
            .join('')}`,
        html: message(`
            <h1>${subject}</h1>
            ${table({
                ['Voornaam']: data.firstName,
                ['Achternaam']: data.lastName,
                ['E-mail']: data.email,
                ['Telefoonnummer']: data.phone,
                ['Bericht']: data.message,
            })}
          `),
        attachments: attachment ? [attachment as EmailAttachment] : undefined,
    })

    return NextResponse.json({})
}
