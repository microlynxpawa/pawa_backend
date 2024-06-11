import { randomFillSync } from "crypto";
import Logger from "./winston";
import { AppErrorCodes } from "../error/appError/general.error";

export default function generateValidationCode(): string | any {
  try {
    let otp = "";
    const otpLength = 6;
    for (let i = 0; i < otpLength; i++) {
      const randomBytes = randomFillSync(Buffer.alloc(4));
      const index = randomBytes.readUInt32LE(0) % 10; // Limit to digits 0-9
      otp += index.toString();
    }
    return otp;
  } catch (error) {
    Logger.error("Error generating validation code", error);
    return AppErrorCodes.codeGenError;
  }
}

export function generateDefaultPassword(): string | any {
  try {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = 8; // Length of the password
    const charsLength = chars.length;

    let defaultPwd = "";
    for (let i = 0; i < length; i++) {
      // Generate a random index using cryptographic random bytes
      const randomBytes = randomFillSync(Buffer.alloc(1));
      const randomIndex = randomBytes[0] % charsLength;
      // Append a character from `chars` based on the random index
      defaultPwd += chars[randomIndex];
    }
    return defaultPwd;
  } catch (error) {
    Logger.error("Error generating default secret key: ", error);
    return AppErrorCodes.codeGenError;
  }
}
