
import nodemailer from "nodemailer";


export default async function handler(req, res) {
    if (req.method !== "POST") {
        console.log(req);
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { to, name, txt } = req.body;

    if (!to || !name || !txt) {
        return res.status(400).json({ error: 'To, subject, and text fields are required.' });
    }

    const EMAIL_USER = process.env.NEXT_PUBLIC_EMAIL_USER;
    const EMAIL_USER2 = process.env.NEXT_PUBLIC_EMAIL_USER2;
NEXT_PUBLIC_
    // First email: To the user thanking them for contacting
    const firstEmailSubject = 'An E-mail from ~Srinivas Batthula';
    // const firstEmailText = `Thank you '${name}' for contacting me.\nYour response has been recorded.\n\t~Srinivas Batthula`;
    const firstEmailHtml = `<!DOCTYPE html>
        <html>
        <head>
            <style>
            body { font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; }
            .container { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
            .footer { margin-top: 20px; font-size: 14px; color: #555; }
            </style>
        </head>
        <body>
            <div class="container">
            <h2>Thank You, <span style="color: #007bff;">${name}</span>!</h2>
            <p>Your response has been recorded.</p>
            <p class="footer">~ Srinivas Batthula</p>
            </div>
        </body>
        </html>`

    const firstEmailOptions = {
        from: EMAIL_USER,
        to: to,
        subject: firstEmailSubject,
        // text: firstEmailText,
        html: firstEmailHtml,
    };

    // Second email: To admin or personal email address with user message
    const secondEmailSubject = 'From Personal Portfolio';
    // const secondEmailText = `A new user, ${name}, messaged you: \n${txt}`;
    const secondEmailHtml = `<!DOCTYPE html>
        <html>
        <head>
            <style>
            body { font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; }
            .container { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
            .message { background: #f8f9fa; padding: 10px; border-left: 4px solid #007bff; font-style: italic; }
            </style>
        </head>
        <body>
            <div class="container">
            <h2>New Message from <span style="color: #007bff;">${name}</span></h2>
            <p class="message">${txt}</p>
            </div>
        </body>
        </html>`

    const secondEmailOptions = {
        from: EMAIL_USER,
        to: EMAIL_USER2,
        subject: secondEmailSubject,
        // text: secondEmailText,
        html: secondEmailHtml,
    }

    try {
        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.NEXT_PUBLIC_EMAIL_USER,
                pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
            },
        })

        // Send the first email (to the user)
        await transporter.sendMail(firstEmailOptions);

        // Send the second email (to admin/personal email)
        await transporter.sendMail(secondEmailOptions);

        return res.status(200).json({ status: 'success', message: 'Emails sent successfully!' })
    }
    catch (error) {
        return res.status(500).json({ status: 'fail', error: 'Failed to send email.' });
    }
}
