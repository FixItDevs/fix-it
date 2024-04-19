import express, { Express, Request, Response } from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors"

dotenv.config();

const dbPassword = process.env.MONGO_PW;
const dbUserName = process.env.MONGO_USERNAME
const dbName = process.env.MONGO_DBNAME || `fixit_DEV`

const mongoDbUrl = `mongodb+srv://${dbUserName}:${dbPassword}@cluster0.7zmqlik.mongodb.net/?retryWrites=true&w=majority&appName=${dbName}`

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