import dotenv from "dotenv";
import Server from "./server";

dotenv.config();

const _port = process.env.PORT ? parseInt(process.env.PORT) : 3333;
const server = new Server();
server.start(_port);
