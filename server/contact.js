require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { BrevoClient } = require("@getbrevo/brevo");

const app = express();
const PORT = process.env.PORT || 3000;

// ======================
// BREVO CONFIG
// ======================

const brevo = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY,
});

// ======================
// MIDDLEWARE
// ======================

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// ======================
// TEST ROUTE
// ======================

app.get("/", (req, res) => {
  res.send("Backend is working properly 🚀");
});

// ======================
// CONTACT ROUTE
// ======================

app.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    await brevo.transactionalEmails.sendTransacEmail({
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

        <hr>

        <p>This email was sent from the EDUSITY contact form.</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: error.message,
    });
  }
});

// ======================
// START SERVER
// ======================

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});