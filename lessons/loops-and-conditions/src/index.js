var numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
var personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
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
for (var i = 0; i < 2; i++) {
    var lastFilm = prompt("Один из последних просмотренных фильмов?", "");
    var rate = +prompt("На сколько оцените его?", "");
    if (lastFilm !== "" && rate !== 0 && lastFilm != null && rate != null && lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = rate;
    }
    else {
        i--;
    }
}
var a = 0;
while (a < 2) {
    var lastFilm = prompt("Один из последних просмотренных фильмов?", "");
    var rate = +prompt("На сколько оцените его?", "");
    a++;
    if (lastFilm !== "" && rate !== 0 && lastFilm != null && rate != null && lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = rate;
    }
    else {
        a--;
    }
}
var b = 0;
do {
    var lastFilm = prompt("Один из последних просмотренных фильмов?", "");
    var rate = +prompt("На сколько оцените его?", "");
    b++;
    if (lastFilm !== "" && rate !== 0 && lastFilm != null && rate != null && lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = rate;
    }
    else {
        b--;
    }
} while (b < 2);
console.log(personalMovieDB);
