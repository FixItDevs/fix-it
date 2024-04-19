import express, { Express, Request, Response } from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors"

dotenv.config();

const mongoDbUrl = `mongodb+srv://sidra1360:${process.env.MONGO_PW}@cluster0.xi8zihz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const app = express();

app.use(cors());

const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoDbUrl);
    console.log('MongoDB is Connected!')
  } catch (error) {
    console.log('Unable to connect to MongoDB Database!');
    console.error(error);
  }
}

connectToDatabase();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({message: 'Server is running'});
});

export default app;