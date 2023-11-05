// import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { z } from "zod";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    if (request.method !== "POST") {
        return new Response(null, { status: 404, statusText: "Not Found" });
    }

    try {
        const { name, email, message } = await request.json();

        // Create a NodeMailer transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false, // Use TLS
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

            // Send email from contact form to my server
            await transporter.sendMail({
                from: process.env.EMAIL_USER,  // My SMTP2GO verified email
                to: process.env.EMAIL_USER,  // My email
                subject: `New Message from ${name}`,
                text: message,
                html: `
            <p>Name: ${name}</p> 
            <p>Email: ${email}</p> 
            <p>Message: ${message} </p>
            `,
            });

            // Send confirmation email to user
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: email,
                subject: 'Email Confirmation',
                text: 'Thank you for submitting the form. This is a confirmation that we received your submission.',
            });

            // console.log('Message sent', request);

            // request.status(200).json({ message: "Email sent successfully" });
    
        return NextResponse.json({status:200});
    } catch (error: any) {
        if (error instanceof z.ZodError) return new Response(error.issues[0].message, { status: 422 });
        return new Response(error.message, { status: 500 });
    }
}



// export default async function ContactAPI(req, res) {
//         const { name, email, message } = req.body;

//         // Create a transporter
//         const transporter = nodemailer.createTransport({
//             host: process.env.SMTP_HOST,
//             port: Number(process.env.SMTP_PORT),
//             secure: false, // Use TLS
//             auth: {
//                 user: process.env.SMTP_USER ,
//                 pass: process.env.SMTP_PASS ,
//             },
//         });


//         // Send email
//         try {
//             // Set email data
//             const mailOptions = await transporter.sendMail({
//             from: email,  // Sender's email
//             replyTo: email,
//             to: process.env.EMAIL_USER ,  // My email
//             subject: `New Message from ${name}`,
//             text: message,
//             html:`
//             <p>Name: ${name}</p> 
//             <p>Email: ${email}</p> 
//             <p>Message: ${message} </p>
//             `,
//         });

//         console.log('Message sent', mailOptions.messageId );

//             res.status(200).json({ message: "Email sent successfully" });
//         } catch (error) {
//             console.log(error);
//             res.status(500).json({ message: "Error sending email", error });
//         }
// }
