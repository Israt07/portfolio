require('dotenv').config();
const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const portfolioRoutes = require('./routes/portfolioRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files middleware
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Contact form endpoint
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: 'All fields are required.' });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            replyTo: email,
            to: process.env.EMAIL_USER,
            subject: `New Portfolio Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <h2 style="color:#00e5ff;">New message from your portfolio</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <hr/>
                <p><strong>Message:</strong></p>
                <p style="white-space:pre-wrap;">${message}</p>
            `,
        });

        res.json({ success: true });
    } catch (err) {
        console.error('Email error:', err);
        res.status(500).json({ success: false, error: 'Failed to send email. Please try again.' });
    }
});

// Routes
app.use('/', portfolioRoutes);

app.listen(PORT, () => {
    console.log(`Server is running accurately on http://localhost:${PORT}`);
});
