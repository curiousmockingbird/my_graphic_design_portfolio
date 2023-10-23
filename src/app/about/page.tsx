import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const About = () => {
    return (
        <section className="bg-gray-100 p-6 rounded-md shadow-md max-w-lg mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form action="/api/contact" method="POST" className="space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-lg mb-2">Name:</label>
                    <input type="text" id="name" name="name" required className="p-2 border rounded-md text-black" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-lg mb-2">Email:</label>
                    <input type="email" id="email" name="email" required className="p-2 border rounded-md text-black" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message" className="text-lg mb-2">Message:</label>
                    <textarea id="message" name="message" required className="p-2 border rounded-md h-32 text-black"></textarea>
                </div>
                <div>
                    <Button type="submit" variant="outlined">Contained</Button>
                </div>
            </form>
            {/* <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack> */}
        </section>
    );
}

export default About;