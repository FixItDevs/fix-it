import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: { unique: true}
  },
  avatar: {
    url: { type: String, required: false }
  },
  email: { type: String, required: true},
  password: { type: String, required: true}
})