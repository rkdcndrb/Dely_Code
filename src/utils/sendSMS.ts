import Twilio from "twilio";

const client = Twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

export const sendVerificationText = (phoneNumber: string, code: string) =>
  sendSMS(phoneNumber, `Your verification code is: ${code}`);

const sendSMS = (phoneNumber: string, body: string) => {
  return client.messages.create({
    body,
    from: process.env.TWILIO_PHONE,
    to: phoneNumber
  });
};
