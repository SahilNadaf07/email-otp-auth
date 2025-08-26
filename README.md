# email-otp-auth

![GitHub](https://img.shields.io/github/license/username/repo)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/username/repo)
![GitHub last commit](https://img.shields.io/github/last-commit/username/repo)

A simple email OTP authentication system built using HTML. This project provides a basic authentication mechanism using a one-time password (OTP) sent to the user's email address.

## Key Features and Highlights
- Secure authentication process
- Easy integration with existing systems
- Lightweight and minimalistic design

## Installation
To install the necessary dependencies, run the following command:
```bash
npm install body-parser@2.2.0 cors@2.8.5 crypto@1.0.1 express@5.1.0 nodemailer@7.0.5
```

## Usage
To use the email OTP authentication system, follow these steps:

1. Include the required dependencies in your project.
2. Configure the email settings for nodemailer.
3. Implement the OTP generation and verification logic in your application.

Sample code snippet for sending OTP via email:
```javascript
// Code snippet to send OTP via email
const nodemailer = require('nodemailer');

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

// Send OTP to user's email
transporter.sendMail({
  from: 'your-email@gmail.com',
  to: 'user@example.com',
  subject: 'Your OTP for authentication',
  text: 'Your OTP is: 123456'
});
```

## Dependencies
- body-parser: ^2.2.0
- cors: ^2.8.5
- crypto: ^1.0.1
- express: ^5.1.0
- nodemailer: ^7.0.5

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.
