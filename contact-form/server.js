const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Serve your HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});

// Handle form submission
app.post("/send", (req, res) => {
  const { name, email, message } = req.body;

  // Set up the email transporter
  const transporter = nodemailer.createTransport({
    service: "Outlook365", // Or any other email service you use
    auth: {
      user: process.env.EMAIL, // Replace with your email
      pass: process.env.PASSWORD, // Replace with your email password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL, // Replace with your email
    subject: `Contact form submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Include the sender's email here
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Something went wrong.");
    }
    res.status(200).send("Message sent successfully!");
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "Outlook365",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});
