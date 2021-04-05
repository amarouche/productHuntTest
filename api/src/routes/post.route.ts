import { Router } from 'express';
import * as postController from '../controllers/post.controller';

const routes = Router();
routes.get('/', postController.getPosts);
module.exports = routes;