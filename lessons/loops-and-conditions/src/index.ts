const numberOfFilms: number = +prompt('Сколько фильмов вы уже посмотрели?', '')
const minFilmsNumber: number = 10
const maxFilmsNumber: number = 30
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

if (personalMovieDB.count < minFilmsNumber) {
  alert('Просмотрено довольно мало фильмов')
} else if (personalMovieDB.count >= minFilmsNumber && personalMovieDB.count <= maxFilmsNumber) {
  alert('Вы классический зритель')
} else if (personalMovieDB.count > maxFilmsNumber) {
  alert('Вы киноман')
} else {
  alert('Произошла ошибка')
}

// method 1
for (let i: number = 0; i < 2; i++) {
  const lastFilm: string = prompt('Один из последних просмотренных фильмов?', '')
  const lastFilmRate: number = +prompt('На сколько оцените его?', '')

  if (
    lastFilm !== '' &&
    lastFilm != null &&
    lastFilm.length < 50 &&
    lastFilmRate !== 0 &&
    lastFilmRate != null
  ) {
    personalMovieDB.movies[lastFilm] = lastFilmRate
  } else {
    i--
  }
}

// method 2
let requestsNumber: number = 0
while (requestsNumber < 2) {
  const lastFilm: string = prompt('Один из последних просмотренных фильмов?', '')
  const lastFilmRate: number = +prompt('На сколько оцените его?', '')
  requestsNumber++

  if (
    lastFilm !== '' &&
    lastFilm != null &&
    lastFilm.length < 50 &&
    lastFilmRate !== 0 &&
    lastFilmRate != null
  ) {
    personalMovieDB.movies[lastFilm] = lastFilmRate
  } else {
    requestsNumber--
  }
}

// method 3
requestsNumber = 0
do {
  const lastFilm: string = prompt('Один из последних просмотренных фильмов?', '')
  const lastFilmRate: number = +prompt('На сколько оцените его?', '')
  requestsNumber++
  if (
    lastFilm !== '' &&
    lastFilm != null &&
    lastFilm.length < 50 &&
    lastFilmRate !== 0 &&
    lastFilmRate != null
  ) {
    personalMovieDB.movies[lastFilm] = lastFilmRate
  } else {
    requestsNumber--
  }
} while (requestsNumber < 2)

console.log(personalMovieDB)
