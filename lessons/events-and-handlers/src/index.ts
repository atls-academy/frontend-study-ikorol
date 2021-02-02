document.addEventListener('DOMContentLoaded', () => {
  const movieDB: { movies: string[] } = {
    movies: [
      'Логан',
      'Лига справедливости',
      'Ла-ла лэнд',
      'Одержимость',
      'Скотт Пилигрим против...',
    ],
  }
  const advertising = document.querySelectorAll('.promo__adv img')
  const movieGenre = document.querySelectorAll('.promo__genre')
  const moviePoster: HTMLElement = document.querySelector('.promo__bg')
  const moviesList: HTMLElement = document.querySelector('.promo__interactive-list')
  const addForm: HTMLFormElement = document.querySelector('form.add')
  const addFilmInput: HTMLInputElement = addForm.querySelector('.adding__input')
  const checkbox: HTMLInputElement = addForm.querySelector('[type="checkbox"]')
  const sortArr = (arr) => {
    arr.sort()
  }

  function createMoviesList(films: string[], parent: HTMLElement) {
    parent.innerHTML = ''
    sortArr(films)

    films.forEach((movie: string, i: number) => {
      parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${movie}
                    <div class="delete"></div>
                </li>
            `
    })

    document.querySelectorAll('.delete').forEach((btn, i: number) => {
      btn.addEventListener('click', () => {
        btn.parentElement.remove()
        movieDB.movies.splice(i, 1)
        createMoviesList(films, parent)
      })
    })
  }

  addForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let newFilm: string = addFilmInput.value
    const favoriteFilm: boolean = checkbox.checked
    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`
      }
      if (favoriteFilm) {
        console.log('Добавляем любимый фильм')
      }
      movieDB.movies.push(newFilm)
      sortArr(movieDB.movies)

      createMoviesList(movieDB.movies, moviesList)
    }
    addForm.reset()
  })

  movieDB.movies.sort()

  const deleteAdvertising = (arr) => {
    arr.forEach((item) => {
      item.remove()
    })
  }

  const makeChanges = () => {
    movieGenre.forEach((item) => {
      item.textContent = 'Драма'
    })
    moviePoster.style.backgroundImage = "url('../img/bg.jpg')"
  }

  deleteAdvertising(advertising)
  makeChanges()
  createMoviesList(movieDB.movies, moviesList)
})
