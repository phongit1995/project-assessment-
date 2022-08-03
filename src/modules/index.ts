import express, { Router } from 'express';
import MovieModule from './movie/movie.router';
const router: Router = express.Router();
router.use('/movie', MovieModule);
export default router;
