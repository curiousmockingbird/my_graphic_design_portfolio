'use client'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import Header from '../components/Header'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const About = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const mutation = useMutation(async (data) => {
        const response = await axios.post('/api/contact', data);
        if (response.status !== 200) {
            throw new Error(`Error: ${response.status}`);
        }
        return response.data;
    });


    const onSubmit = (data: any) => {
        mutation.mutate(data);
        reset();
    };

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <div className='h-screen flex-1'>
            <div className='main h-1/5'>
                <Header headerText='Contact Me' />
            </div>
            <div className='lg:h-4/5'>
                <main className='h-full main grid lg:grid-cols-2'>
                    {/* <div className="grid grid-rows-3">
                        <div className='flex items-end justify-center'>
                            <h2 className="text-2xl font-bold mb-4 text-center">contact me at hola@haroldesigner.art</h2>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-center">or</h2>
                        </div>
                        <div className='flex justify-center bg-orange'>
                            <a href="https://www.instagram.com/harold_designer/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon sx={{ fontSize: 40 }} />
                            </a>
                            <a href="https://www.linkedin.com/in/haroldmesa93/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon sx={{ fontSize: 40 }} />
                            </a>
                        </div>
                    </div> */}
                    <div className='flex flex-col justify-center items-center'>
                    <div className='pb-2 lg:pb-0'><h2>You can also find me on:</h2></div>
                    <div className='flex justify-center items-center'>
                    <a href="https://www.instagram.com/harold_designer/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon sx={{ fontSize: 40 }} />
                            </a>
                            <a href="https://www.linkedin.com/in/haroldmesa93/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon sx={{ fontSize: 40 }} />
                            </a>                    
                    </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h4 className="mb-4 text-center">Got Questions, Ideas, or Just Want to Say Hi?<br/> I am All Ears (and Inbox)!</h4>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-3/4">
                            <div>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-lg mb-2">Your Name:</label>
                                <input {...register('name', { required: true })} type="text" id="name" className="p-2 border rounded-md text-black" />
                                {errors.name && <span className='text-red'>This field is required</span>}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-lg mb-2">Your Email:</label>
                                <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} type="email" id="email" className="p-2 border rounded-md text-black" />
                                {errors.email && <span className='text-red'>This field is required</span>}

                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="message" className="text-lg mb-2">Message:</label>
                                <textarea {...register('message', { required: true })} id="message" className="p-2 border rounded-md h-32 text-black"></textarea>
                                {errors.message && <span className='text-red'>This field is required</span>}
                            </div>
                            {/* Button from Modal */}

                            <button
                                type="submit"
                                onClick={openModal}
                                className="rounded-md bg-tahiti px-4 py-2 text-sm font-medium text-white hover:bg-tahiti/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 transition-all duration-700"
                            >
                                Send
                            </button>
                        </form>

                        <Transition appear show={isOpen} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-black/25" />
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-orange p-6 text-left align-middle shadow-xl transition-all">
                                                {/* <Dialog.Title
                                                    as="h3"
                                                    className="text-lg font-medium leading-6 text-gray-900"
                                                >
                                                    Payment successful
                                                </Dialog.Title> */}
                                                {/* <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div> */}

                                                <div className="mt-4">
                                                    {mutation.isLoading ? (
                                                        <span>Sending...</span>
                                                    ) : mutation.isError ? (
                                                        <span>Error...</span>
                                                    ) : mutation.isSuccess ? (
                                                        <span>Message sent!</span>
                                                    ) : null}
                                                </div>

                                                <div className="mt-4">
                                                    <button
                                                        type="button"
                                                        className="inline-flex justify-center rounded-md border border-transparent bg-tahiti px-4 py-2 text-sm font-medium text-blue-900 hover:tahiti focus:outline-none focus-visible:ring-2 focus-visible:ring-tahiti focus-visible:ring-offset-2"
                                                        onClick={closeModal}
                                                    >
                                                        Got it, thanks!
                                                    </button>
                                                </div>

                                            </Dialog.Panel>

                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>


                        {/* Handle mutation states */}
                        {/* {mutation.isError ? <span>Error</span> : null}
                        {mutation.isSuccess ? <span>Submitted successfully!</span> : null}
                        {mutation.isLoading ? <span>Submitting...</span> : null} */}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default About;
