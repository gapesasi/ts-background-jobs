import Job from "../type";

const job: Job<any> = {
  key: "Welcome_Mail_Retry",
  handle: function ({ data }): void {
    throw new Error("Function not implemented.");
  },
  error: function (job: any, data: any): void {
    throw new Error("Function not implemented.");
  },
};

export default job;
