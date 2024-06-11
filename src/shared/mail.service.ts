import { createTransport } from "nodemailer";
import config from "config";
import Logger from "../utils/winston";
import { AppErrorCodes } from "../error/appError/general.error";

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
    Logger.error("Error sending mail ", error);
    return AppErrorCodes.appMailTransportError;
  }
};
