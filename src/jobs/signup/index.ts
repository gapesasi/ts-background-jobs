import { SignupEntity } from "../../controller/signup";
import Queue from "../../module/queue";
import Job from "../type";

const job: Job<SignupEntity> = {
  key: "Signup",
  handle: async ({ data }) => {
    const text = `Welcome ${data.username}. 
    You have been successfully subscribed into our website under the email ${data.email}`;
    const sender = "Queue Test <queue@queuetest.com.br>";

    await Queue.add("Welcome_Mail", {
      to: data.email,
      from: sender,
      text: text,
    });
  },

  error: (job: any, data: any) => {
    console.error("Error in SignUp job, sending to retry");
    console.log(job.data);
  },
};

export default job;
