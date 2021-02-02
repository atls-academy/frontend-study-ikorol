const movieDB: { movies: string[] } = {
  movies: ['Логан', 'Лига справедливости', 'Ла-ла лэнд', 'Одержимость', 'Скотт Пилигрим против...'],
}

const advertising = document.querySelectorAll('.promo__adv img')
const genre = document.querySelectorAll('.promo__genre')
const moviePoster: HTMLElement = document.querySelector('.promo__bg')
const moviesList: HTMLElement = document.querySelector('.promo__interactive-list')
const newMoviePoster: string = "url('../img/bg.jpg')"

advertising.forEach((item) => {
  item.remove()
})

genre.forEach((item) => {
  item.textContent = 'Драма'
})

moviePoster.style.backgroundImage = newMoviePoster

moviesList.innerHTML = ''
movieDB.movies.sort()
movieDB.movies.forEach((movie: string, i: number) => {
  moviesList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${movie}
            <div class="delete"></div>
        </li>
    `
})
