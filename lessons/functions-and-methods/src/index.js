var numberOfFilms;
function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms === 0 || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}
start();
var personalMovieDB = {
    'count': numberOfFilms,
    'movies': {},
    'actors': {},
    'genres': [],
    'privat': false
};
function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert("Вы классический зритель");
    }
    else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    }
    else {
        alert("Произошла ошибка");
    }
}
detectPersonalLevel();
function writeYourGenres() {
    for (var i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt("\u0412\u0430\u0448 \u043B\u044E\u0431\u0438\u043C\u044B\u0439 \u0436\u0430\u043D\u0440 \u043F\u043E\u0434 \u043D\u043E\u043C\u0435\u0440\u043E\u043C " + (i + 1), "");
    }
}
writeYourGenres();
function rememberMyFilms() {
    for (var i = 0; i < 2; i++) {
        var lastFilm = prompt("Один из последних просмотренных фильмов?", ""), rate = +prompt("На сколько оцените его?", "");
        if (lastFilm !== "" && rate !== 0 && lastFilm != null && rate != null && lastFilm.length < 50) {
            personalMovieDB.movies[lastFilm] = rate;
        }
        else {
            i--;
        }
    }
}
rememberMyFilms();
function showMyDB(status) {
    if (!status) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);
