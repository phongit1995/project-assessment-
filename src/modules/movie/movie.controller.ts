import { Request, Response } from 'express';
import { MovieService } from './movie.service';
export const createMovieController = async (req: Request, res: Response) => {
  try {
    const movie = await MovieService.createMovie(req.body);
    return res.status(202).json(movie);
  } catch (error) {
    res.status(500).json(error);
  }
};
