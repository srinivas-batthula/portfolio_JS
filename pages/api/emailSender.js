
// pages/api/send-email.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Check for POST request
    if (req.method === 'POST') {
        let { name, to, txt } = req.body;  // Extract the necessary fields from the request body

        // Validate input data
        if (!to || !name || !txt) {
            return res.status(400).json({ error: 'To, subject, and text fields are required.' });
        }

        let EMAIL_USER = process.env.EMAIL_USER;
        let EMAIL_PASS = process.env.EMAIL_PASS;
        let EMAIL_USER2 = process.env.EMAIL_USER2;

        // Create a transporter using SMTP or a third-party service (e.g., Gmail, SendGrid)
        const transporter = nodemailer.createTransport({
            service: 'gmail',  // Use your preferred email service
            auth: {
                user: EMAIL_USER,  // Replace with your email
                pass: EMAIL_PASS,  // Replace with your email password or App password
            },
        });

        // Email options
        let subject = "An E-mail from ~Srinivas Batthula";
        let text = `Thank you ${name} for Contacting me,\n As your Response has been recorded.\n\t ~Srinivas Batthula`
        let mailOptions = {
            from: EMAIL_USER,  // Sender address
            to,                             // Receiver address
            subject,                        // Email subject
            text,                           // Plain text body
        };

        try {
            // Send the email
            await transporter.sendMail(mailOptions);

            to = EMAIL_USER2;
            subject = `From Personal PortFolio,,`;
            text = `A New User ${name} messaged you as,, \n ${txt}`
            mailOptions = {
            from: EMAIL_USER,  // Sender address
            to,                             // Receiver address
            subject,                        // Email subject
            text,   
            }
            await transporter.sendMail(mailOptions);

            return res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            return res.status(500).json({ error: 'Failed to send email.', details: error.message });
        }
    } else {
        // Handle any other HTTP method
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
