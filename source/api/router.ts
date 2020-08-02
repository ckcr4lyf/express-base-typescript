import { Router } from 'express';

import getPosts from './controllers/getPosts';
import createPost from './controllers/createPost';

const router = Router();

router.get('/posts', getPosts);
router.post('/post', createPost);

export default router;