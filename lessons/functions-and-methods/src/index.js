let numberOfFilms;

function start() {
  numberOfFilms = +prompt( "Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt( "Сколько фильмов вы уже посмотрели?", "");
  }
}
start();

const personalMovieDB = {
  'count': numberOfFilms,
  'movies': {},
  'actors': {},
  'genres': [],
  'privat': false
};

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
  } else {
    alert("Произошла ошибка");
  }
}
detectPersonalLevel();

function writeYourGenres() {
  for (let i = 0; i < 3; i++ ) {
    personalMovieDB.genres[ i ] = prompt( `Ваш любимый жанр под номером ${i + 1}`, "");
  }
}
writeYourGenres();

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
        rate = +prompt("На сколько оцените его?", "");

    if (lastFilm !== "" && rate !== 0 && lastFilm != null && rate != null && lastFilm.length < 50 ) {
      personalMovieDB.movies[lastFilm] = rate;
    } else {
      i--;
    }
  }
}
rememberMyFilms();

function showMyDB(status) {
  if ( !status ) {
    console.log( personalMovieDB );
  }
}
showMyDB(personalMovieDB.privat);
