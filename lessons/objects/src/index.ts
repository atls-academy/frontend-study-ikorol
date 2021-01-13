const personalMovieDB: {
  count: number,
  movies: object,
  actors: object,
  genres: string[],
  private: boolean,
  start: () => void,
  detectPersonalLevel: () => void,
  writeYourGenres: () => void,
  rememberMyFilms: () => void,
  toggleVisibleMyDB: () => void,
  showMyDB: () => void
  } = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function(): void {
    this.count = prompt( "Сколько фильмов вы уже посмотрели?", "");
    while (this.count === '' || this.count == null || isNaN(this.count)) {
      this.count = prompt( "Сколько фильмов вы уже посмотрели?", "");
    }
  },
  detectPersonalLevel: function(): void {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      alert("Вы киноман");
    } else {
      alert("Произошла ошибка");
    }
  },
  writeYourGenres: function(): void {
    for (let i: number = 0; i < 3; i++ ) {
      let personalGenre: string = prompt( `Ваш любимый жанр под номером ${i + 1}`, "");
      while (personalGenre === '' || personalGenre == null) {
        personalGenre = prompt( `Ваш любимый жанр под номером ${i + 1}`, "");
      }
      this.genres[ i ] = personalGenre;
    }
    this.genres.forEach( (item: string, i: number) => {
      console.log( `Любимый жанр ${ i + 1 } - это ${ item }`);
    });
  },
  rememberMyFilms: function(): void {
    for (let i: number = 0; i < 2; i++) {
      let lastFilm: string = prompt("Один из последних просмотренных фильмов?", "");
      let rate: number = +prompt("На сколько оцените его?", "");

      if (lastFilm !== "" && rate !== 0 && lastFilm != null && rate != null && lastFilm.length < 50 ) {
        personalMovieDB.movies[lastFilm] = rate;
      } else {
        i--;
      }
    }
  },
  toggleVisibleMyDB: function(): void {
    this.private = !this.private;
  },
  showMyDB: function(): void {
    if ( !this.private ) {
      console.log( personalMovieDB );
    }
  }

};

personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.rememberMyFilms();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
