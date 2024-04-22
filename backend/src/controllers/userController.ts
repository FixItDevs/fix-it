import { Request, Response, NextFunction } from 'express';
import User from '../models/userModel';

const validatePassword = (password: string) => {
  const regex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,}$/;
  return regex.test(password);
}

export const addUser = async (req: Request, res: Response, next: NextFunction) => {
  const { username, avatar, email, password } = req.body;

  if (!validatePassword(password)) {
    return res.status(400).json({ message: 'Invalid password format' });
  }

  try {
    const user = new User({
      username,
      avatar,
      email,
      password
    });

    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
}
