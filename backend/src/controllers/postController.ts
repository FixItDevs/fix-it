import { Request, Response, NextFunction } from 'express';
import Post from '../models/postModel';

export const getAllPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { offset = 0, _limit = 10 } = req.query

    const rawPosts = await Post.find()
      .skip(Number(offset))
      .limit(Number(_limit));

    const posts = rawPosts.map(post => {
      const { _id, ...rest } = post.toObject();
      return { postId: _id, ...rest };
    }
    );
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

export const getPostsByTag = async (req: Request, res: Response, next: NextFunction) => {
  let { mainTags, subTags } = req.query;
  
    if (!mainTags && !subTags) {
      getAllPosts(req, res, next);
      return;
    }

  let mainTagsArray = typeof mainTags === 'string' ? mainTags.split(',') : null;
  let subTagsArray = typeof subTags === 'string' ? subTags.split(',') : null;

  try {
    const posts = await Post.find({
      $or: [
        { 'tags.mainTags': { $in: mainTagsArray } },
        { 'tags.subTag': { $in: subTagsArray } }
      ]
    });
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
}

export const getPostsBySearchQuery = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let { searchQuery } = req.query;

    searchQuery = typeof searchQuery === 'string' ? searchQuery : '';
    
    const posts = await Post.find({
      $or: [
        {'postText.title': { "$regex": searchQuery, "$options": "i"}},
        {'postText.body': { "$regex": searchQuery, "$options": "i"}},
      ]
      });
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
}
