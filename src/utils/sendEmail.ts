import Mailgun from "mailgun-js";

const mailgun = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: process.env.MAILGUN_DOMAIN || ""
});

export const sendConfirmationEmail = (key: string) => {
  const emailSubject = "Please confirm your email";
  const emailBody = `Hello please confirm your email by: <a href="http://localhost:3000/verify-email/${key}">clicking here</a>`;
  return sendMail(emailSubject, emailBody);
};

export const sendResetPasswordEmail = (key: string) => {
  const emailSubject = "Reset password";
  const emailBody = `Hello please click here to reset your password: <a href="http://dely.co/reset/${key}">clicking here</a>`;
  return sendMail(emailSubject, emailBody);
};

export const sendMail = (subject: string, html: string) => {
  const emailData = {
    from: "kmseo94@gmail.com",
    to: "kmseo94@gmail.com",
    subject,
    html
  };
  return mailgun.messages().send(emailData);
};
