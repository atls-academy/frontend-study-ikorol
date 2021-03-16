/* eslint-disable no-alert, no-console */

const numberOfFilms: number = +prompt('Сколько фильмов вы уже посмотрели?', '')

const personalMovieDB: {
  count: number
  movies: object
  actors: object
  genres: string[]
  private: boolean
} = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
}

const firstFilm: string = prompt('Один из последних просмотренных фильмов?', '')
const rateFirstFilm: number = +prompt('На сколько оцените его?', '')
const secondFilm: string = prompt('Один из последних просмотренных фильмов?', '')
const rateSecondFilm: number = +prompt('На сколько оцените его?', '')

personalMovieDB.movies[firstFilm] = rateFirstFilm
personalMovieDB.movies[secondFilm] = rateSecondFilm
console.log(personalMovieDB)

export {}
