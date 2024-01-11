import { Component } from '@angular/core';
import {
  NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault,
  CurrencyPipe, DatePipe, DecimalPipe, PercentPipe, UpperCasePipe
} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IMovie } from './movie';
import { MovieService } from './movie.service';

@Component({
  standalone: true,
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  imports: [
    FormsModule,
    NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault,
    CurrencyPipe, DatePipe, DecimalPipe, PercentPipe, UpperCasePipe
  ],
  styleUrls: [ './movie-list.component.css' ],
})
export class MovieListComponent {
  favoriteHero: string | undefined;
  showImage = false;
  movies: IMovie[];

  constructor(movieService: MovieService) {
    this.movies = movieService.getMovies();
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  checkMovieHero(value: string): boolean {
    return this.movies.filter(movie => movie.hero === value).length > 0 ;
  }
}
