import express from 'express';
import * as postController from '../controllers/postController';

const router = express.Router();

router.get('/', postController.getAllPosts);

router.get('/tag', postController.getPostsByTag);

router.post('/', postController.addPost);

export default router;