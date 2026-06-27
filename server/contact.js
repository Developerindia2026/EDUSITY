require('dotenv').config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const brevo = require("@getbrevo/brevo");

let app = express();
const PORT = process.env.PORT || 3000;

// brevo routing 
const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_API_KEY
);

// middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());



app.get("/", (req, res) => {
    res.send("backend is working properly");

})

// form-handle post 
app.post("/contact", async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        const sendSmtpEmail = {
            sender: {
                name: "EDUSITY Contact Form",
                email: process.env.SENDER_EMAIL,
            },

            to: [
                {
                    email: process.env.SENDER_EMAIL,
                    name: "Deepanshu",
                },
            ],

            subject: "📩 New Contact Form Submission",

            htmlContent: `
        <h2>New Contact Form Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
        };

        await apiInstance.sendTransacEmail(sendSmtpEmail);

        res.status(200).json({
            success: true,
            message: "Email sent successfully",
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Something went wrong while sending email",
            error: error.message,
        });
    }
});

// PORTS 
app.listen(PORT, () => {
    console.log(`backend running on the server port ${PORT}`)
});