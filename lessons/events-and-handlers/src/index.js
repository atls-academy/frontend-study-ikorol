document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против..."
    ]
  };
  const adv = document.querySelectorAll(".promo__adv img"),
    genre = document.querySelectorAll(".promo__genre"),
    image = document.querySelector(".promo__bg"),
    moviesList = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector("form.add"),
    addInput = addForm.querySelector(".adding__input"),
    checkbox = addForm.querySelector('[type="checkbox"]');

  addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;
    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
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

    films.forEach((movie, i) => {
      parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${movie}
                    <div class="delete"></div>
                </li>
            `;
    });

    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        createMoviesList(films, parent);
      });
    });
  }


  const deleteAdv = (arr) => {
    arr.forEach(item => {
      item.remove();
    });
  };


  const makeChanges = () => {
    genre.forEach(item => {
      item.textContent = "Драма";
    });

    image.style.backgroundImage = "url('../img/bg.jpg')";
  };


  const sortArr = (arr) => {
    arr.sort();
  };

  deleteAdv(adv);
  makeChanges();
  createMoviesList(movieDB.movies, moviesList);
});
