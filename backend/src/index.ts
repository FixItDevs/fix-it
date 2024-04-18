import express, { Express, Request, Response } from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({message: 'Server is running'});
});

export default app;