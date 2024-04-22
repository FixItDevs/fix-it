import { Request, Response, NextFunction } from 'express';
import User from '../models/userModel';

const validatePassword = (password: string) => {
  const regex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._£-]{8,}$/;
  return regex.test(password);
}

const validateEmail = (email: string) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

export const addUser = async (req: Request, res: Response, next: NextFunction) => {
  const { username, avatar, email, password } = req.body;

  if (!validatePassword(password)) {
    return res.status(400).json({ message: 'Invalid password format, please try again.' });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ message: 'Invalid email, please try again.' });
  }

  try {
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existingUser) {
      if (existingUser.username === username) {
        return res.status(400).json({ message: 'Username already exists.' });
      } else {
        return res.status(400).json({ message: 'Email already exists.' });
      }
    }

    const newUser = new User({ username, avatar, email, password });
    await newUser.save();

    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
