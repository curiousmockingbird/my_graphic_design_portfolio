'use client'

// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import Header from '../components/Header'
import Image from 'next/image';

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
    <div className='grid grid-rows-2'>
        <Header headerText='#WeThePeople' />
        <main className='main grid grid-cols-2'>
        <div className="grid grid-cols-2` bg-orange">
                    <div className='bg-tahiti flex items-center justify-center'>
                    <Image 
                        src="/profile_pic.jpg" 
                        alt="Your Name" 
                        className="rounded-full w-3/4"
                        width={200}
                        height={200}
                    />
                    </div>
                    <div className='px-6 flex items-center'>
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
        <div className="flex items-center justify-center">
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
                <div>
                    <Button type="submit" variant="outlined">Contained</Button>
                </div>
            </form>

            {/* Handle mutation states */}
            {mutation.isError ? <span>Error</span> : null}
            {mutation.isSuccess ? <span>Submitted successfully!</span> : null}
            {mutation.isLoading ? <span>Submitting...</span> : null}
        </div>
        </main>
        </div>
    );
}

export default About;

// const About = () => {
//     const mutation = useMutation({
//         mutationFn: (newMessage) => {
//           return axios.post('/api/contact', newMessage)
//         },
//       })
    
//     //   if (mutatio.isLoading) return <div>Data is Loading</div>
//     //   if (mutation.isError) return <div>Error</div>
//     //   if (mutation.isSuccess) return <div>Success</div>

//     async function handleSubmit(event:any) {
//         event.preventDefault();
    
//         const data = {
//             name: String(event.target.name.value), 
//             email: String(event.target.email.value), 
//             message: String(event.target.message.value),
//          };
    
//             const response = await fetch('/api/contact', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(data),
//             });
        
//             if (response.ok) {
//                 alert(response.status);
//             } 
//             if (!response.ok) {
//                 alert(`Error: ${response.status}`);
//             }
        
//         console.log(data);
//     }

//     return (
//         <section className="bg-gray-100 p-6 rounded-md shadow-md max-w-lg mx-auto mt-10">
//             <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="flex flex-col">
//                     <label htmlFor="name" className="text-lg mb-2">Name:</label>
//                     <input type="text" id="name" name="name" required className="p-2 border rounded-md text-black" />
//                 </div>
//                 <div className="flex flex-col">
//                     <label htmlFor="email" className="text-lg mb-2">Email:</label>
//                     <input type="email" id="email" name="email" required className="p-2 border rounded-md text-black" />
//                 </div>
//                 <div className="flex flex-col">
//                     <label htmlFor="message" className="text-lg mb-2">Message:</label>
//                     <textarea id="message" name="message" required className="p-2 border rounded-md h-32 text-black"></textarea>
//                 </div>
//                 <div>
//                     <Button type="submit" variant="outlined">Contained</Button>
//                 </div>
//             </form>
//             {/* <Stack spacing={2} direction="row">
//                 <Button variant="text">Text</Button>
//                 <Button variant="contained">Contained</Button>
//                 <Button variant="outlined">Outlined</Button>
//             </Stack> */}
//         </section>
//     );
// }

// export default About;