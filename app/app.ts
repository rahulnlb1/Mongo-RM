import { env } from "process";
import { resolve } from "path";
import * as Express from "express";
import * as Mongoose from "mongoose";
import * as BodyParser from "body-parser";
import * as Morgan from "morgan";
import { config } from "dotenv";

import { ProjectRoute } from "./modules/project";

config({ path: resolve(__dirname, "../.env") });

const port: string = env.PORT || "3000";
const mongoURL: string = env.DB_HOST || "";

const app: Express.Application = Express();
app.use(Morgan("combined"));
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to RM!!!" });
});

const projectRoute = new ProjectRoute();
app.use(ProjectRoute.BasePath, projectRoute.getRouter());

Mongoose.connect(mongoURL, { useNewUrlParser: true });
const db = Mongoose.connection;

db.on("error", console.error.bind(console, "connection: error"));
db.on("open", () => {
  console.log("Mongo Connected");
  app.listen(port, () => {
    console.log(`Listening to port ${port}`);
  });
});
