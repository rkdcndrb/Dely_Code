import Twilio from "twilio";

const client = Twilio(
  "AC6186080e9c24b8c8069dd5a18631ccf5",
  "b146c7856bcc703550bf4c2416230eff"
);

export const sendVerificationText = (phoneNumber: string, code: string) =>
  sendSMS(phoneNumber, `Your verification code is: ${code}`);

const sendSMS = (phoneNumber: string, body: string) => {
  return client.messages.create({
    body,
    from: "+16502412238",
    to: phoneNumber
  });
};
