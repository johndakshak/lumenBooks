import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

type ContactEmailParams = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function sendContactEmail({
  name,
  email,
  subject,
  message,
}: ContactEmailParams) {
  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject: `[Lumen Books Contact] ${subject}`,
    text: `From: ${name} (${email})\n\n${message}`,
    html: `
      <p><strong>From:</strong> ${name} (${email})</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p>${message}</p>
    `,
  });
}