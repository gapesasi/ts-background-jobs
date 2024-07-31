import mail, { MailOptions } from "../../module/mail";
import Job from "../type";

const job: Job<MailOptions> = {
  key: "Welcome_Mail",
  handle: async ({ data }) => {
    await mail.sendMail({
      to: data.to,
      from: data.from,
      text: data.text,
      attachments: data.attachments,
    });
  },
  error: (job: any, error: any) => {
    console.log("Job Failed", job.key, job.data);
    console.error(error);
  },
};

export default job;
