const numberOfFilms: number = +prompt('Сколько фильмов вы уже посмотрели?', '')

const personalMovieDB: {
  count: number
  movies: object
  actors: object
  movieGenres: string[]
  privat: boolean
} = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  movieGenres: [],
  privat: false,
}

const firstFilm: string = prompt('Один из последних просмотренных фильмов?', '')
const rateFirstFilm: number = +prompt('На сколько оцените его?', '')
const secondFilm: string = prompt('Один из последних просмотренных фильмов?', '')
const rateSecondFilm: number = +prompt('На сколько оцените его?', '')

personalMovieDB.movies[firstFilm] = rateFirstFilm
personalMovieDB.movies[secondFilm] = rateSecondFilm
console.log(personalMovieDB)
