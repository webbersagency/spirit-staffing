import * as Yup from 'yup'
import messages from '../../utils/messages'

export const contactFormSchema = Yup.object({
    firstName: Yup.string().required(messages.fieldRequired),
    lastName: Yup.string().required(messages.fieldRequired),
    email: Yup.string().required(messages.fieldRequired).email(messages.emailAddressNotValid),
    phone: Yup.string().required(messages.fieldRequired),
    message: Yup.string().required(messages.fieldRequired),
})

export type ContactFormSchema = Yup.InferType<typeof contactFormSchema>
