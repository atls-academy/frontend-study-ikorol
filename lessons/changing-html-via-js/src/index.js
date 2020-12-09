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
  moviesList = document.querySelector(".promo__interactive-list");

adv.forEach( item => {
  item.remove();
});

genre.forEach( item => {
  item.textContent = "Драма";
});

image.style.backgroundImage = "url('../img/bg.jpg')";

moviesList.innerHTML = "";
movieDB.movies.sort();
movieDB.movies.forEach( (movie, i) => {
  moviesList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${movie}
            <div class="delete"></div>
        </li>
    `;
});
