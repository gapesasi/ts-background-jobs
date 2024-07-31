import dotenv from "dotenv";
import SMTPTransport from "nodemailer/lib/smtp-transport";
dotenv.config();

const mailConfig: SMTPTransport.Options = {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT ? parseInt(process.env.MAIL_PORT) : undefined,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
};

export default mailConfig;
