import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userModel = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: { unique: true }
  },
  avatar: {
    url: { type: String, required: false },
    altText: { type: String, required: false }
  },
  email: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true }
});

userModel.pre('save', async function(next) {
  try {
    if (!this.isModified('password')) {
      return next();
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(this.password, salt);

    this.password = hashedPassword;

    next();
  } catch (error: any) {
    next(error);
  }
});

const User = mongoose.model('User', userModel);

export default User;
