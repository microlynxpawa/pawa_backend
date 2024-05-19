import { createTransport } from "nodemailer";
import config from "config";

const getTransport = () =>
  createTransport({
    host: config.get("mail_host"),
    port: 465,
    secure: true,
    auth: {
      user: config.get("mail_user"),
      pass: config.get("mail_pass"),
    },
  });

export const sendMail = async (mailOptions: any) => {
  try {
    await getTransport().sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};
