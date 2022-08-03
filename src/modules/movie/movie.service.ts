import { MovieEntity } from './../../model/movie.entity';
import { getRepository } from 'typeorm';
import { CreateMovieI } from './movie.interface';
export class MovieService {
  public static createMovie(movie: CreateMovieI) {
    const movieRepository = getRepository(MovieEntity);
    const movieData = movieRepository.create(movie);
    return movieRepository.save(movieData);
  }
}
