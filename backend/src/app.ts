import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors"
import postRoutes from "./routes/postRoutes";

dotenv.config();

const dbPassword = process.env.MONGO_PW;
const dbUserName = process.env.MONGO_USERNAME
const dbName = process.env.MONGO_DBNAME || `fixit_DEV`

const mongoDbUrl = `mongodb+srv://${dbUserName}:${dbPassword}@cluster0.7zmqlik.mongodb.net/${dbName}?retryWrites=true&w=majority`

const app = express();

app.use(cors());

const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoDbUrl);
    console.log(`🥳 MongoDB is Connected to ${dbName} Database!`)
  } catch (error) {
    console.log('❌ Unable to connect to MongoDB Database!');
    console.error(error);
  }
}

connectToDatabase();

app.use(express.json());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({message: 'Server is running'});
  } catch (error: any) {
    next(error);
  }
});

app.use('/api/v1.0/posts', postRoutes);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  const status = error.statusCode || 500;
  res.status(status).json({ message: error.message });
});

export default app;