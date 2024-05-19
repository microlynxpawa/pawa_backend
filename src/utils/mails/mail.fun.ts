import { VerificationCodeMailBody } from "../../utils/mails/verification.code.mail.body";
import { sendMail } from "../../shared/mail.service";
import { SignupConfirmationMailBody } from "./signup.confirmation.mail.body";

export const sendVerificationEmail = async (to: string, code: string, firstname: string) => {
  const body = VerificationCodeMailBody(code, firstname);
  await sendMail({
    from: '"PAWA" <noreply@example.com>',
    to,
    subject: "Your Verification Code.",
    html: body,
  });
};


export const sendSignUpConfirmationEmail = async (to: string, defaultPass: string, firstname: string) => {
  const body = SignupConfirmationMailBody(defaultPass, firstname);
  await sendMail({
    from: '"PAWA" <noreply@example.com>',
    to,
    subject: "Your Signup request is confirmed.",
    html: body,
  });
};