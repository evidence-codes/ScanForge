import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
import { connectDB } from "./config/db.config";

const app: Express = express();
const port = 5000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

connectDB();
