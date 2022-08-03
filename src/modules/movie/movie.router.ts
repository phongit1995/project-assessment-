import express, { Router } from 'express';
import { AuthenticationMiddleware } from './../../middleware/authentication.middleware';
import { createMovieController } from './movie.controller';
const router: Router = express.Router();
router.post('/', AuthenticationMiddleware, createMovieController);
export default router;
