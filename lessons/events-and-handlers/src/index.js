document.addEventListener("DOMContentLoaded", function () {
    var movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    var adv = document.querySelectorAll(".promo__adv img");
    var genre = document.querySelectorAll(".promo__genre");
    var image = document.querySelector(".promo__bg");
    var moviesList = document.querySelector(".promo__interactive-list");
    var addForm = document.querySelector("form.add");
    var addInput = addForm.querySelector(".adding__input");
    var checkbox = addForm.querySelector('[type="checkbox"]');
    addForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var newFilm = addInput.value;
        var favorite = checkbox.checked;
        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = newFilm.substring(0, 22) + "...";
            }
            if (favorite) {
                console.log("Добавляем любимый фильм");
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMoviesList(movieDB.movies, moviesList);
        }
        addForm.reset();
    });
    movieDB.movies.sort();
    function createMoviesList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
        films.forEach(function (movie, i) {
            parent.innerHTML += "\n                <li class=\"promo__interactive-item\">" + (i + 1) + " " + movie + "\n                    <div class=\"delete\"></div>\n                </li>\n            ";
        });
        document.querySelectorAll(".delete").forEach(function (btn, i) {
            btn.addEventListener("click", function () {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMoviesList(films, parent);
            });
        });
    }
    var deleteAdv = function (arr) {
        arr.forEach(function (item) {
            item.remove();
        });
    };
    var makeChanges = function () {
        genre.forEach(function (item) {
            item.textContent = "Драма";
        });
        image.style.backgroundImage = "url('../img/bg.jpg')";
    };
    var sortArr = function (arr) {
        arr.sort();
    };
    deleteAdv(adv);
    makeChanges();
    createMoviesList(movieDB.movies, moviesList);
});
