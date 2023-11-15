'use client'
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import Header from '../components/Header'
import Image from 'next/image';
import MyModal from '../components/Modal';

const About = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const mutation = useMutation(async (data) => {
        const response = await axios.post('/api/contact', data);
        if (response.status !== 200) {
            throw new Error(`Error: ${response.status}`);
        }
        return response.data;
    });

    const onSubmit = (data:any) => {
        mutation.mutate(data);
    };

    return (
    <div className='h-screen flex-1'>
        <div className='main h-1/5'>
        <Header headerText='#WeThePeople' />
        </div>
        <div className='lg:h-4/5'>
        <main className='h-full main grid lg:grid-cols-2'>
        <div className=" grid-rows-2 ">
                    <div className='flex items-center justify-center py-4'>
                    <Image 
                        src="/profile_pic.jpg" 
                        alt="Your Name" 
                        className="rounded-full w-3/4"
                        width={400}
                        height={400}
                    />
                    </div>
                    <div className='px-6 flex items-center pb-6 lg:pb-0'>
                        <div className=''>
                        {/* <p className="text-lg leading-relaxed mb-3">
                            Hello! I'm [Your Name], a passionate Graphic Designer with over [X years] of experience. I specialize in creating unique designs that capture the essence of a brand and resonate with its audience. From logos to comprehensive branding projects, I have worked with various clients across different industries.
                        </p> */}
                        <p className="text-lg leading-relaxed">
                            I am always eager to learn and adapt to the ever-evolving world of design. When I am not designing, you can find me exploring nature, capturing moments with my camera, or diving into a new book.
                        </p>
                        </div>
                    </div>
        </div>
        <div className="flex items-center justify-center pb-6 lg:pb-0">
            {/* <h2 className="text-2xl font-bold mb-4">Contact Us</h2> */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-3/4">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-lg mb-2">Name:</label>
                    <input {...register('name', { required: true })} type="text" id="name" className="p-2 border rounded-md text-black" />
                    {errors.name && <span>This field is required</span>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-lg mb-2">Email:</label>
                    <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} type="email" id="email" className="p-2 border rounded-md text-black" />
                    {errors.email && <span>This field is required and should be a valid email</span>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message" className="text-lg mb-2">Message:</label>
                    <textarea {...register('message', { required: true })} id="message" className="p-2 border rounded-md h-32 text-black"></textarea>
                    {errors.message && <span>This field is required</span>}
                </div>
                <MyModal/>
            </form>

            {/* Handle mutation states */}
            {mutation.isError ? <span>Error</span> : null}
            {mutation.isSuccess ? <span>Submitted successfully!</span> : null}
            {mutation.isLoading ? <span>Submitting...</span> : null}
        </div>
        </main>
        </div>
        </div>
    );
}

export default About;
