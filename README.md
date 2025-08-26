# 📧 Email OTP Authentication App

A simple Node.js + Express application that provides **One-Time Password (OTP)** authentication via **email**.  
This project demonstrates how to generate, send, and verify OTPs securely with a frontend built using **Bootstrap**.

---

## ✨ Features
- 🔐 Generate secure random OTPs
- 📩 Send OTPs via email using **Nodemailer**
- ✅ Verify OTPs with expiry validation
- 🎨 Simple frontend with **Bootstrap**
- ⚡ API endpoints (`/send-otp`, `/verify-otp`) for integration

---

## 🛠️ Tech Stack
- **Backend**: Node.js, Express
- **Frontend**: HTML, Bootstrap
- **Email Service**: Nodemailer (SMTP with Gmail)
- **Security**: `crypto` for OTP generation

---

## 📂 Project Structure
email-otp-auth/
│── server.js          # Main server file
│── public/            # Frontend files (HTML, CSS, JS)
│── package.json       # Dependencies
│── .gitignore         # Ignored files (node_modules, etc.)

---

## 🚀 Getting Started

### 1. Clone the Repository
git clone https://github.com/SahilNadaf07/email-otp-auth.git
cd email-otp-auth

### 2. Install Dependencies
npm install

### 3. Configure Environment Variables  
Create a `.env` file in the root directory:

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
PORT=5000

⚠️ For Gmail, you need to generate an **App Password** instead of using your normal email password.  
Guide: https://support.google.com/accounts/answer/185833

---

### 4. Run the Server
node server.js

Server will run at:  
👉 http://localhost:5000

---

## 📌 API Endpoints

### 1. Send OTP
POST /send-otp

Request Body:
{
  "email": "user@example.com"
}

Response:
{
  "message": "OTP sent successfully!"
}

---

### 2. Verify OTP
POST /verify-otp

Request Body:
{
  "email": "user@example.com",
  "otp": "123456"
}

Response:
{
  "success": true,
  "message": "OTP verified successfully!"
}

---

## 🎨 Frontend
The app serves a simple **Bootstrap UI** where users can:
- Enter their email
- Request OTP
- Verify OTP

---

## 🔮 Next Steps (Future Improvements)
- 📱 Add SMS OTP support (Twilio, Nexmo)
- 🗄️ Store OTPs in a database (MongoDB, PostgreSQL)
- 🔑 JWT Authentication after OTP verification
- 🌍 Deploy on Render / Vercel / AWS

---

## 👨‍💻 Author
**Sahil Nadaf**  
💼 GitHub: https://github.com/SahilNadaf07

---

## 📜 License
This project is licensed under the **MIT License** — feel free to use and modify it.
