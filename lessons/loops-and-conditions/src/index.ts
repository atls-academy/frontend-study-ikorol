const numberOfFilms: number = +prompt('Сколько фильмов вы уже посмотрели?', '')

const personalMovieDB: {
  count: number
  movies: object
  actors: object
  genres: string[]
  privat: boolean
} = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}

if (personalMovieDB.count < 10) {
  alert('Просмотрено довольно мало фильмов')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  alert('Вы классический зритель')
} else if (personalMovieDB.count > 30) {
  alert('Вы киноман')
} else {
  alert('Произошла ошибка')
}

// method 1
for (let i: number = 0; i < 2; i++) {
  const lastFilm: string = prompt('Один из последних просмотренных фильмов?', '')
  const rate: number = +prompt('На сколько оцените его?', '')

  if (lastFilm !== '' && rate !== 0 && lastFilm != null && rate != null && lastFilm.length < 50) {
    personalMovieDB.movies[lastFilm] = rate
  } else {
    i--
  }
}

// method 2
let a: number = 0
while (a < 2) {
  const lastFilm: string = prompt('Один из последних просмотренных фильмов?', '')
  const rate: number = +prompt('На сколько оцените его?', '')
  a++

  if (lastFilm !== '' && rate !== 0 && lastFilm != null && rate != null && lastFilm.length < 50) {
    personalMovieDB.movies[lastFilm] = rate
  } else {
    a--
  }
}

// method 3
let b: number = 0
do {
  const lastFilm: string = prompt('Один из последних просмотренных фильмов?', '')
  const rate: number = +prompt('На сколько оцените его?', '')
  b++
  if (lastFilm !== '' && rate !== 0 && lastFilm != null && rate != null && lastFilm.length < 50) {
    personalMovieDB.movies[lastFilm] = rate
  } else {
    b--
  }
} while (b < 2)

console.log(personalMovieDB)
