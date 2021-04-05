import { Router } from 'express';
import * as collectionController from '../controllers/collection.controller';

const routes = Router();
routes.get('/', collectionController.getCollections);
module.exports = routes;