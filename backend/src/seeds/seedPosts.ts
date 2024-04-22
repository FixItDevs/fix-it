import mongoose from 'mongoose';
import Post from '../models/postModel';
import { postSeedData } from './postSeedData';
import dotenv from 'dotenv';
dotenv.config();

const dbPassword = process.env.MONGO_PW;
const dbUserName = process.env.MONGO_USERNAME;
const dbName = process.env.MONGO_DBNAME;

console.log('UN:', dbUserName);

const mongoDbUrl = `mongodb+srv://${dbUserName}:${dbPassword}@cluster0.7zmqlik.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoDbUrl);
    console.log(`🥳 MongoDB is Connected to ${dbName} Database!`);
  } catch (error) {
    console.log('❌ Unable to connect to MongoDB Database!');
    console.error(error);
  }
};

connectToDatabase();

const clearPosts = async () => {
  await Post.deleteMany({});
};

const insertPosts = async () => {
  await Post.insertMany(postSeedData);
};

const seedPosts = async () => {
  try {
    await clearPosts();
    await insertPosts();
    console.log('🌱 Seeding Completed!');
  } catch (error) {
    console.log('❌ Seeding Failed!');
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
};

seedPosts();
