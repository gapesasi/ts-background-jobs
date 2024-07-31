import { Request, Response } from "express";
import { validateEmail } from "../../util/email";
import Queue from "../../module/queue";

export type SignupEntity = {
  email: string;
  username: string;
};

export default {
  async handle(req: Request, res: Response) {
    const { email, username }: SignupEntity = req.body;

    const isValid = validateEmail(email);

    if (!isValid) return res.status(404).json({ message: "Invalid Email" });

    const user = {
      username,
      email,
    };

    await Queue.add("Signup", user);

    res.status(200).json({
      message: "User Registered. You will receive a welcome email soon",
    });
  },
};
