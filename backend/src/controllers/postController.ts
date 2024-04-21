import { Request, Response, NextFunction } from 'express';
import Post from '../models/postModel';

export const getAllPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

export const addPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const post = new Post({
      user: req.body.user,
      postText: req.body.postText,
      tags: req.body.tags,
      images: req.body.images,
      videos: req.body.videos,
      comments: req.body.comments,
      votes: req.body.votes
    });
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
}