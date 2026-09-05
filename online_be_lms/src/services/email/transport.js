import nodemailer from "nodemailer";

export const emailTransporter = () => {
  // Create a SMTP transporter object
  const transporter = nodemailer.createTransport({
    host:process.env.SMTP_HOST ,
    port:process.env.SMTP_PORT ,
    // secure:process.env.SMTP_SECURE, // true for 465, false for other ports
    auth: {
      user:process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASS,
    },
  });
  return transporter;
};
