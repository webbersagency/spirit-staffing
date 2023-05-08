'use client'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Button from '../Button'
import { fadeIn, slideInBottom, slideInLeft } from 'web/src/utils/animations'
import classNames from 'classnames'
import useAnimations from 'web/src/utils/animations/useAnimations'
import { contactFormSchema, ContactFormSchema } from './schema'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { getBaseUrl } from 'web/src/utils/getBaseUrl'
import { routes } from 'web/src/lib/routes'
import { useState } from 'react'
import InputField from '../FormFields/InputField'
import TextareaField from '../FormFields/TextareaField'
import SnackBar from '../SnackBar'
import FileUploadField from '../FormFields/FileUploadField'
import { getBase64 } from '../../utils/getBase64'

export const ContactForm = () => {
    const { ref, inView } = useAnimations()
    const [formMessage, setFormMessage] = useState<{ isSuccess: boolean; message: string } | undefined>(undefined)

    const methods = useForm<ContactFormSchema>({
        resolver: yupResolver(contactFormSchema),
    })

    const {
        formState: { errors, isSubmitting },
        register,
        reset,
        watch,
        handleSubmit,
    } = methods

    const setGenericError = () => {
        setFormMessage({
            isSuccess: false,
            message: `Er is een fout opgetreden, probeer het opnieuw.`,
        })
    }

    const onSubmit = async (data: ContactFormSchema) => {
        setFormMessage(undefined)

        const attachment = data.attachment as FileList
        data.attachment =
            attachment && attachment.length
                ? {
                      fileName: attachment[0].name,
                      data: await getBase64(attachment[0]),
                  }
                : undefined

        await fetch(`${getBaseUrl()}${routes.contact}/request`, {
            method: 'POST',
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(result => {
                setFormMessage({
                    isSuccess: true,
                    message: `Thank you, we will get back to you as soon as possible`,
                })
                reset()
            })
            .catch(error => {
                setGenericError()
            })
    }

    return (
        <>
            <div id="contactForm" ref={ref} className="relative isolate bg-white">
                <div className="mx-auto grid grid-cols-1 xl:container lg:grid-cols-2">
                    <div className="bg-green200 relative lg:static">
                        <div className="container xl:py-0">
                            <div
                                className={classNames(
                                    'bg-green200 absolute inset-y-0 left-0 -z-10 w-full overflow-hidden lg:w-1/2',
                                    fadeIn(inView)
                                )}
                            ></div>
                            <div className={classNames(slideInLeft(inView))}>
                                <h2 className="text-3xl font-medium tracking-tight sm:text-5xl">
                                    Stuur ons een bericht{' '}
                                </h2>
                                <p className="mt-6 leading-6">
                                    We komen graag met je in contact. Als je graag wilt solliciteren, maar je ziet nog
                                    geen passende vacature, stuur ons dan een open sollicitatie. We kijken dan samen
                                    naar de mogelijkheden die bij jou passen.
                                </p>
                                <dl className="text-dark mt-10 space-y-4 text-base leading-7">
                                    <div className="flex gap-x-4">
                                        <dt className="flex-none">
                                            <span className="sr-only">Telephone</span>
                                            <PhoneIcon className="h-7 w-6 " aria-hidden="true" />
                                        </dt>
                                        <dd>
                                            <a className="hover:text-gray-900" href="tel:+31 6 15543235">
                                                +31 6 15543235
                                            </a>
                                        </dd>
                                    </div>
                                    <div className="flex gap-x-4">
                                        <dt className="flex-none">
                                            <span className="sr-only">Email</span>
                                            <EnvelopeIcon className="h-7 w-6" aria-hidden="true" />
                                        </dt>
                                        <dd>
                                            <a className="hover:text-gray-900" href="mailto:info@spiritstaffing.nl">
                                                info@spiritstaffing.nl
                                            </a>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <FormProvider {...methods}>
                        <form onSubmit={handleSubmit(onSubmit)} className="container xl:max-w-xl xl:py-0">
                            <div className={classNames('mx-auto lg:mr-0 ', slideInBottom(inView))}>
                                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                    <div>
                                        <InputField {...register('firstName')} label="Voornaam" />
                                    </div>
                                    <div>
                                        <InputField {...register('lastName')} label="Achternaam" />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <InputField {...register('email')} type="email" label="E-mail" />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <InputField {...register('phone')} type="tel" label="Telefoonnummer" />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <TextareaField {...register('message')} label="Bericht" />
                                    </div>
                                    <div className="col-span-full">
                                        <FileUploadField {...register('attachment')} label="Bijlage" />
                                    </div>
                                </div>
                                <div className="mt-8 flex justify-end">
                                    <Button as="button" type="submit" variant="primary" loading={isSubmitting}>
                                        Let's get in touch
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </FormProvider>
                </div>
            </div>
            {!!formMessage && <SnackBar {...formMessage} />}
        </>
    )
}
