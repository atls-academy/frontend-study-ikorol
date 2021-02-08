window.addEventListener('DOMContentLoaded', () => {
  /** Tabs */

  const tabs = document.querySelectorAll('.tabheader__item')
  const tabsContent = document.querySelectorAll('.tabcontent')
  const tabsParent: HTMLElement = document.querySelector('.tabheader__items')

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add('hide')
      item.classList.remove('show', 'fade')
    })

    tabs.forEach((item) => {
      item.classList.remove('tabheader__item_active')
    })
  }

  function showTabContent(i: number = 0) {
    tabsContent[i].classList.add('show', 'fade')
    tabsContent[i].classList.remove('hide')
    tabs[i].classList.add('tabheader__item_active')
  }

  hideTabContent()
  showTabContent()

  function hasClass(element: any, className: string): boolean {
    return element.className.indexOf(className) > -1
  }

  tabsParent.addEventListener('click', (e) => {
    const { target } = e

    if (target && hasClass(target, 'tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target === item) {
          hideTabContent()
          showTabContent(i)
        }
      })
    }
  })

  /** Countdown timer */

  const deadline: string = '2020-12-31'

  function getTimeRemaining(
    endTime: string
  ): {
    total: number
    days: number
    hours: number
    minutes: number
    seconds: number
  } {
    const timeLeft: number = Date.parse(endTime) - Date.parse(new Date().toISOString())
    const days: number = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    const hours: number = Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
    const minutes: number = Math.floor((timeLeft / 1000 / 60) % 60)
    const seconds: number = Math.floor((timeLeft / 1000) % 60)

    return {
      total: timeLeft,
      days,
      hours,
      minutes,
      seconds,
    }
  }

  function getZero(num: number): string {
    if (num >= 0 && num < 10) {
      return `0${num}`
    }
    return `${num}`
  }

  function setClock(selector: string, endTime: string) {
    const timer: HTMLElement = document.querySelector(selector)
    const days: HTMLElement = timer.querySelector('#days')
    const hours: HTMLElement = timer.querySelector('#hours')
    const minutes: HTMLElement = timer.querySelector('#minutes')
    const seconds: HTMLElement = timer.querySelector('#seconds')
    const timeInterval = setInterval(updateClock, 1000)

    updateClock()

    function updateClock() {
      const clock = getTimeRemaining(endTime)

      days.innerHTML = getZero(clock.days)
      hours.innerHTML = getZero(clock.hours)
      minutes.innerHTML = getZero(clock.minutes)
      seconds.innerHTML = getZero(clock.seconds)

      if (clock.total <= 0) {
        clearInterval(timeInterval)
      }
    }
  }

  setClock('.timer', deadline)

  /** Modal window */

  const modalTrigger = document.querySelectorAll('[data-modal]')
  const modalWindow = document.querySelector('.modal')

  function openModalWindow() {
    modalWindow.classList.toggle('show')
    document.body.style.overflow = 'hidden'
    clearInterval(modalTimer)
  }

  modalTrigger.forEach((btn) => {
    btn.addEventListener('click', openModalWindow)
  })

  function closeModalWindow() {
    modalWindow.classList.toggle('show')
    document.body.style.overflow = ''
  }

  modalWindow.addEventListener('click', (e) => {
    const el = e.target as HTMLInputElement
    if (e.target === modalWindow || el.getAttribute('data-close') === '') {
      closeModalWindow()
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
      closeModalWindow()
    }
  })

  const modalTimer = setTimeout(openModalWindow, 15000)

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModalWindow()
      window.removeEventListener('scroll', showModalByScroll)
    }
  }

  window.addEventListener('scroll', showModalByScroll)

  /** Use classes for menu cards */

  class MenuCard {
    img: string

    alt: string

    title: string

    description: string

    price: number

    parentSelector: HTMLElement

    classes: string[]

    currentExchangeRate: number

    element: string

    constructor(
      img: string,
      alt: string,
      title: string,
      description: string,
      price: number,
      parentSelector: string,
      ...classes: string[]
    ) {
      this.img = img
      this.alt = alt
      this.title = title
      this.description = description
      this.price = price
      this.parentSelector = document.querySelector(parentSelector)
      this.classes = classes
      this.currentExchangeRate = 75
      this.convertCurrency()
      this.element = 'menu__item'
    }

    convertCurrency() {
      this.price *= this.currentExchangeRate
    }

    render() {
      const element: HTMLElement = document.createElement('div')

      if (this.classes.length === 0) {
        element.classList.add(this.element)
      } else {
        this.classes.forEach((className) => element.classList.add(className))
      }

      element.innerHTML = `
          <img src=${this.img} alt=${this.alt}>
          <h3 class="menu__item-subtitle">${this.title}</h3>
          <div class="menu__item-descr">${this.description}</div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
          </div>
      `
      this.parentSelector.append(element)
    }
  }

  new MenuCard(
    '../src/assets/img/tabs/vegy.jpg',
    'fitness',
    `Меню "Фитнес"`,
    `Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и
  фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и 
  высоким качеством!`,
    15,
    '.menu .container',
    'menu__item'
  ).render()

  new MenuCard(
    '../src/assets/img/tabs/elite.jpg',
    'premium',
    `Меню “Премиум”`,
    `В меню “Премиум” мы используем не только красивый дизайн упаковки, но и
    качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!`,
    20,
    '.menu .container',
    'menu__item'
  ).render()

  new MenuCard(
    '../src/assets/img/tabs/post.jpg',
    'post',
    `Меню "Постное"`,
    `Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов
    животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество 
    белков за счет тофу и импортных вегетарианских стейков.`,
    18,
    '.menu .container',
    'menu__item'
  ).render()

  /** Forms */

  const forms = document.querySelectorAll('form')
  const answerMessage: { loading: string; success: string; error: string } = {
    loading: '../src/assets/img/form/spinner.svg',
    success: 'Спасибо, скоро мы с Вами свяжемся',
    error: 'Что-то пошло не так...',
  }

  forms.forEach((item: HTMLFormElement) => {
    postFormData(item)
  })

  function postFormData(form: HTMLFormElement) {
    form.addEventListener('submit', (event) => {
      event.preventDefault()

      const statusMessage = document.createElement('img')

      statusMessage.src = answerMessage.loading
      statusMessage.style.cssText = `
        display: block;
        margin: auto;
      `
      form.append(statusMessage)

      const request = new XMLHttpRequest()
      request.open('POST', 'https://jsonplaceholder.typicode.com/users')
      request.setRequestHeader('Content-type', 'application/json')

      const formData: FormData = new FormData(form)

      const inputsData: Object = {}
      formData.forEach((value, key) => {
        inputsData[key] = value
      })
      const changeToJson: string | FormData = JSON.stringify(inputsData)
      request.send(changeToJson)

      request.addEventListener('load', () => {
        if (request.status === 201) {
          showThanksModal(answerMessage.success)
          form.reset()
          statusMessage.remove()
        } else {
          showThanksModal(answerMessage.error)
        }
      })
    })
  }
  function showThanksModal(messageValue: string) {
    const previousModalDialog: HTMLElement = document.querySelector('.modal__dialog')

    previousModalDialog.classList.add('hide')
    openModalWindow()

    const thanksModal: HTMLElement = document.createElement('div')
    thanksModal.classList.add('modal__dialog')
    thanksModal.innerHTML = `
      <div class="modal__content">
        <div class="modal__close" data-close>x<div/>
        <div class="modal__title">${messageValue}<div/>
      </div> 
    `
    document.querySelector('.modal').append(thanksModal)
    setTimeout(() => {
      thanksModal.remove()
      previousModalDialog.classList.add('show')
      previousModalDialog.classList.remove('hide')
      closeModalWindow()
    }, 4000)
  }
})
