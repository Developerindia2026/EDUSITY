require('dotenv').config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const nodemailer = require("nodemailer");

let app = express();
const PORT = process.env.PORT || 3000;



const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD,
    },
});

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

        await transporter.sendMail({
            from: process.env.EMAIL, // sender address
            to: process.env.EMAIL, // list of recipients

            // design 

            subject: "New Contact Form Added", // subject line

            html: `
            <h2>New Contact Message INBOX!</h2>

            <p>NAME: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>message: ${message}</p>
            `
        });

        res.status(200).json({
            success: true,
            message: "Email Sended Successfully",
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Something Went Wrong",
        });
    };
})

// PORTS 
app.listen(PORT, () => {
    console.log(`backend running on the server port ${PORT}`)
});