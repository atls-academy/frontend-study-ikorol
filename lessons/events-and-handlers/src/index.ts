document.addEventListener("DOMContentLoaded", () => {
  const movieDB: {movies: string[]} = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против..."
    ]
  };
  const adv: any = document.querySelectorAll(".promo__adv img");
  const genre: any = document.querySelectorAll(".promo__genre");
  const image: any = document.querySelector(".promo__bg");
  const moviesList: any = document.querySelector(".promo__interactive-list");
  const addForm: any = document.querySelector("form.add");
  const addInput: any = addForm.querySelector(".adding__input");
  const checkbox: any = addForm.querySelector('[type="checkbox"]');

  addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let newFilm: string = addInput.value;
    const favorite: boolean = checkbox.checked;
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


  function createMoviesList(films: string[], parent: any) {
    parent.innerHTML = "";
    sortArr(films);

    films.forEach((movie: string, i: number) => {
      parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${movie}
                    <div class="delete"></div>
                </li>
            `;
    });

    document.querySelectorAll(".delete").forEach((btn, i: number) => {
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


  const makeChanges: () => void = (): void => {
    genre.forEach(item => {
      item.textContent = "Драма";
    });

    image.style.backgroundImage = "url('../img/bg.jpg')";
  };


  const sortArr = (arr): void => {
    arr.sort();
  };

  deleteAdv(adv);
  makeChanges();
  createMoviesList(movieDB.movies, moviesList);
});
