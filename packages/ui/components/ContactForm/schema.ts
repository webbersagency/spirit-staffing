import * as Yup from 'yup'
import messages from '../../utils/messages'

export const contactFormSchema = Yup.object({
    firstName: Yup.string().required(messages.fieldRequired),
    lastName: Yup.string().required(messages.fieldRequired),
    email: Yup.string().required(messages.fieldRequired).email(messages.emailAddressNotValid),
    phone: Yup.string().required(messages.fieldRequired),
    message: Yup.string().required(messages.fieldRequired),
    attachment: Yup.mixed()
        .test({
            message: 'Upload een geldig bestands type',
            test: (files, context) => {
                const fileList = files as FileList

                // Attachment is optionsl
                if (!fileList || !fileList[0]) {
                    return true
                }

                const fileExtension = fileList[0].name.split('.').slice(-1)[0]

                return ['pdf', 'doc', 'docx'].includes(fileExtension)
            },
        })
        .test({
            message: `Upload een bestand van maximaal 10MB`,
            test: files => {
                const fileList = files as FileList

                // Attachment is optionsl
                if (!fileList || !fileList[0]) {
                    return true
                }

                return fileList[0].size < 10000000
            },
        }),
})

export type ContactFormSchema = Yup.InferType<typeof contactFormSchema>
