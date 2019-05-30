import Mailgun from "mailgun-js";

const mailgun = new Mailgun({
  apiKey: "e80b1b7f6e2a97b3f673a494330bbf9f-6140bac2-a9739bd4",
  domain: "sandbox711ea73a57914a46b3faeef68fbfa4d4.mailgun.org"
});

export const sendConfirmationEmail = (key: string) => {
  const emailSubject = "Please confirm your email";
  const emailBody = `Hello please confirm your email by: <a href="http://localhost:3000/verify-email/${key}">clicking here</a>`;
  return sendMail(emailSubject, emailBody);
};

export const sendResetPasswordEmail = (key: string) => {
  const emailSubject = "Reset password";
  const emailBody = `Hello please click here to reset your password: <a href="http://nuber.co/reset/${key}">clicking here</a>`;
  return sendMail(emailSubject, emailBody);
};

export const sendMail = (subject: string, html: string) => {
  const emailData = {
    from: "darkdevil94@naver.com",
    to: "darkdevil94@naver.com",
    subject,
    html
  };
  return mailgun.messages().send(emailData);
};
