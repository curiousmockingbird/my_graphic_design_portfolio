'use client'
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import Header from '../components/Header'
// import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'
// import { useWindowWidth} from '@react-hook/window-size'

const About = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // const onlyWidth = useWindowWidth()

    const [imgWidth, setImgWidth] = useState(200); // Default width

  useEffect(() => {
    // Add an event listener to track window resize
    const handleResize = () => {
      // Calculate the width based on screen size or any other condition
      const newWidth = window.innerWidth < 768 ? 300 : 400; // Example condition
      setImgWidth(newWidth);
    };

    // Initial calculation
    handleResize();

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


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
                    <div className=" grid-rows-2 ">
                        <div className='flex items-center justify-center py-4'>
                            <img
                                src="/profile_pic.jpg"
                                alt="Your Name"
                                className="rounded-full"
                                width={imgWidth}
                            />
                        </div>
                        <div className='px-6 flex items-center pb-6 lg:pb-0'>
                            <div className=''>
                                {/* <p className="text-lg leading-relaxed mb-3">
                            Hello! I'm [Your Name], a passionate Graphic Designer with over [X years] of experience. I specialize in creating unique designs that capture the essence of a brand and resonate with its audience. From logos to comprehensive branding projects, I have worked with various clients across different industries.
                        </p> */}
                                <p className="text-lg text-center leading-relaxed pb-2">
                                Hi, I am Harold Mesa, a Designer with more than six years<br/> of professional experience.
                                </p>
                                <p className="text-lg text-center leading-relaxed">
                                I am an illustrator, animator, and editorial designer, an have worked for agencies and as a freelancer for various clients. I am always eager to learn new tools and techniques, and to apply my design thinking and user-centered approach to web development and design.                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center pb-6 lg:pb-0">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-3/4">
                        <div>
                        <h2 className="text-2xl font-bold mb-4">You can contact me at hola@haroldesigner.art</h2>
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
                                onClick={openModal }
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
