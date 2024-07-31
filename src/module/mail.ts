import nodemailer, { SendMailOptions } from "nodemailer";
import mail from "../config/mail";

export type MailOptions = Pick<
  SendMailOptions,
  "to" | "from" | "text" | "attachments"
>;

export default nodemailer.createTransport(mail);
