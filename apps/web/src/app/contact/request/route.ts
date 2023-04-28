import { type NextRequest, NextResponse } from 'next/server'
import { message, sendMail, table } from '../../../utils/email'
import { ContactFormSchema, contactFormSchema } from 'ui/components/ContactForm/schema'

export async function POST(req: NextRequest) {
    const data: ContactFormSchema = await req.json()

    try {
        await contactFormSchema.validate(data)
    } catch (error) {
        return NextResponse.json({ error }, { status: 422 })
    }

    const subject = 'Contactformulier'
    const to = process.env.MAIL_TO || 'development@webbers.com'

    const formData = {
        ['Voornaam']: data.firstName,
        ['Achternaam']: data.lastName,
        ['E-mail']: data.email,
        ['Telefoonnummer']: data.phone,
        ['Bericht']: data.message,
    }

    await sendMail({
        to,
        subject,
        text: `${Object.entries(formData)
            .map(([key, value]) => `${key}: ${value}\n`)
            .join('')}`,
        html: message(`
            <h1>${subject}</h1>
            ${table(formData)}
          `),
    })

    return NextResponse.json({})
}
