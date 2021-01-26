let numberOfFilms: number

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

  while (numberOfFilms === 0 || numberOfFilms == null || Number.isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
  }
}
start()

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  movieGenres: [],
  privat: false,
}
const minFilmsNumber: number = 10
const maxFilmsNumber: number = 30

function detectPersonalLevel() {
  if (personalMovieDB.count < minFilmsNumber) {
    alert('Просмотрено довольно мало фильмов')
  } else if (personalMovieDB.count >= minFilmsNumber && personalMovieDB.count <= maxFilmsNumber) {
    alert('Вы классический зритель')
  } else if (personalMovieDB.count > maxFilmsNumber) {
    alert('Вы киноман')
  } else {
    alert('Произошла ошибка')
  }
}
detectPersonalLevel()

function writeUserGenres() {
  for (let i: number = 0; i < 3; i += 1) {
    personalMovieDB.movieGenres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '')
  }
}
writeUserGenres()

function rememberUserFilms() {
  for (let i: number = 0; i < 2; i += 1) {
    const lastFilm: string = prompt('Один из последних просмотренных фильмов?', '')
    const lastFilmRate: number = +prompt('На сколько оцените его?', '')

    if (
      lastFilm !== '' &&
      lastFilmRate !== 0 &&
      lastFilm != null &&
      lastFilmRate != null &&
      lastFilm.length < 50
    ) {
      personalMovieDB.movies[lastFilm] = lastFilmRate
    } else {
      i -= 1
    }
  }
}
rememberUserFilms()

function showUserDB(status: boolean) {
  if (!status) {
    console.log(personalMovieDB)
  }
}
showUserDB(personalMovieDB.privat)
