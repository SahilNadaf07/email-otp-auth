const Otp = require("./models/Otp");
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

const app = express();
app.use(bodyParser.json());
app.use(express.static("public")); // for serving static HTML, CSS, JS

// Store OTPs in memory
let otps = {};

// ✅ Gmail SMTP transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sahilnadafexcelligents@gmail.com", 
    pass: "jzljnyvzyokiduhs", 
  },
});

// Verify transporter
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ SMTP Error:", error);
  } else {
    console.log("✅ SMTP Server is ready to send emails");
  }
});

// ✅ Send OTP API
app.post("/send-otp", async (req, res) => {
  const { email } = req.body;
  const otp = crypto.randomInt(100000, 999999).toString();
  otps[email] = { otp, expires: Date.now() + 5 * 60 * 1000 };

  try {
    await transporter.sendMail({
      from: "sahilnadafexcelligents@gmail.com",
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP code is: ${otp}\n\nIt will expire in 5 minutes.`,
    });

    res.json({ success: true, message: "✅ OTP sent successfully to " + email });
  } catch (err) {
    res.status(500).json({ success: false, message: "❌ Failed to send OTP" });
  }
});

// ✅ Verify OTP API
app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  const record = otps[email];

  if (!record) return res.status(400).json({ success: false, message: "No OTP found for this email" });
  if (Date.now() > record.expires) return res.status(400).json({ success: false, message: "OTP expired" });
  if (record.otp !== otp) return res.status(400).json({ success: false, message: "❌ Invalid OTP" });

  delete otps[email];
  return res.json({ success: true, message: "✅ OTP verified successfully!" });
});

// ✅ Homepage UI
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
