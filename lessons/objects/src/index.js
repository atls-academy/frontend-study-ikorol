var personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        this.count = prompt("Сколько фильмов вы уже посмотрели?", "");
        while (this.count === '' || this.count == null || isNaN(this.count)) {
            this.count = prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    detectPersonalLevel: function () {
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
    },
    writeYourGenres: function () {
        for (var i = 0; i < 3; i++) {
            var personalGenre = prompt("\u0412\u0430\u0448 \u043B\u044E\u0431\u0438\u043C\u044B\u0439 \u0436\u0430\u043D\u0440 \u043F\u043E\u0434 \u043D\u043E\u043C\u0435\u0440\u043E\u043C " + (i + 1), "");
            while (personalGenre === '' || personalGenre == null) {
                personalGenre = prompt("\u0412\u0430\u0448 \u043B\u044E\u0431\u0438\u043C\u044B\u0439 \u0436\u0430\u043D\u0440 \u043F\u043E\u0434 \u043D\u043E\u043C\u0435\u0440\u043E\u043C " + (i + 1), "");
            }
            this.genres[i] = personalGenre;
        }
        this.genres.forEach(function (item, i) {
            console.log("\u041B\u044E\u0431\u0438\u043C\u044B\u0439 \u0436\u0430\u043D\u0440 " + (i + 1) + " - \u044D\u0442\u043E " + item);
        });
    },
    rememberMyFilms: function () {
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
    },
    toggleVisibleMyDB: function () {
        this.private = !this.private;
    },
    showMyDB: function () {
        if (!this.private) {
            console.log(personalMovieDB);
        }
    }
};
personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.rememberMyFilms();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
