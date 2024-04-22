import mongoose from 'mongoose';
import User from '../models/userModel';
import { userSeedData } from './userSeedData';
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

const clearUsers = async () => {
  await User.deleteMany({});
};

const insertUsers = async () => {
  await User.insertMany(userSeedData);
};

const seedUsers = async () => {
  try {
    await clearUsers();
    await insertUsers();
    console.log('🌱 Seeding Completed!');
  } catch (error) {
    console.log('❌ Seeding Failed!');
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
};

seedUsers();
