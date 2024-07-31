import express from "express";
import { createServer } from "http";
import controller from "./controller/signup";

export default class Server {
  public app: express.Application;
  public server;

  constructor() {
    this.app = express();
    this.server = createServer(this.app);
    this.setupMiddlewares();
    this.setupRoutes();
  }

  private setupMiddlewares() {
    this.app.use(express.json());
  }

  private setupRoutes() {
    this.app.get("/test", (req, res) => {
      res.status(200).json({
        message: "OK",
      });
    });

    this.app.post("/signup", controller.handle);
  }

  public start(port: number) {
    this.server.listen(port, () => {
      console.log(`🚀 App is running on port ${port}`);
    });
  }
}
