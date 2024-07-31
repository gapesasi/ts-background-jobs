import dotenv from "dotenv";
dotenv.config();

export default {
  host: process.env.REDIS_HOST,
  password: process.env.REDIS_PASSWORD,
  port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT) : undefined,
};
