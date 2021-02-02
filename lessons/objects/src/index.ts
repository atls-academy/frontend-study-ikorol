const personalMovieDB: {
  count: number
  movies: object
  actors: object
  genres: string[]
  private: boolean
  watchedFilmsNum
  detectPersonalLevel
  writeUserGenres
  rememberUserFilms
  toggleVisibleUserDB
  showMyDB
} = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,

  watchedFilmsNum() {
    this.count = prompt('Сколько фильмов вы уже посмотрели?', '')
    while (this.count === '' || this.count == null || Number.isNaN(this.count)) {
      this.count = prompt('Сколько фильмов вы уже посмотрели?', '')
    }
  },

  detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
      alert('Просмотрено довольно мало фильмов')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      alert('Вы классический зритель')
    } else if (personalMovieDB.count > 30) {
      alert('Вы киноман')
    } else {
      alert('Произошла ошибка')
    }
  },

  writeUserGenres() {
    for (let i: number = 0; i < 3; i += 1) {
      let personalMovieGenre: string = prompt(`Ваш любимый жанр под номером ${i + 1}`, '')
      while (personalMovieGenre === '' || personalMovieGenre == null) {
        personalMovieGenre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '')
      }
      this.movieGenres[i] = personalMovieGenre
    }
    this.movieGenres.forEach((item: string, i: number) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`)
    })
  },

  rememberUserFilms() {
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
  },

  toggleVisibleUserDB() {
    this.private = !this.private
  },

  showMyDB() {
    if (!this.private) {
      console.log(personalMovieDB)
    }
  },
}

personalMovieDB.watchedFilmsNum()
personalMovieDB.detectPersonalLevel()
personalMovieDB.writeUserGenres()
personalMovieDB.rememberUserFilms()
personalMovieDB.toggleVisibleUserDB()
personalMovieDB.showMyDB()
