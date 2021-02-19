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
    if (el === modalWindow || el.getAttribute('data-close') === '') {
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
    imgSrc: string

    alt: string

    title: string

    description: string

    price: number

    parentSelector: HTMLElement

    classes: string[]

    currentExchangeRate: number

    element: string

    constructor(
      imgSrc: string,
      alt: string,
      title: string,
      description: string,
      price: number,
      parentSelector: string,
      ...classes: string[]
    ) {
      this.imgSrc = imgSrc
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
          <img src=${this.imgSrc} alt=${this.alt}>
          <h3 class="menu__item-subtitle">${this.title}</h3>
          <div class="menu__item-description">${this.description}</div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
          </div>
      `
      this.parentSelector.append(element)
    }
  }
  const getResources = async (url: string) => {
    const result: Response = await fetch(url)

    if (!result.ok) {
      throw new Error(`Could not fetch ${url}, status: ${result.status}`)
    }
    return result.json()
  }

  getResources('https://6027afc0dd4afd001754a9b0.mockapi.io/api/menu/').then((data) => {
    data.forEach(({ imgSrc, alt, title, description, price }) => {
      new MenuCard(imgSrc, alt, title, description, price, '.menu .container').render()
    })
  })

  /** Forms */

  const forms = document.querySelectorAll('form')
  const answerMessage: { loading: string; success: string; error: string } = {
    loading: '../src/assets/img/form/spinner.svg',
    success: 'Спасибо, скоро мы с Вами свяжемся',
    error: 'Что-то пошло не так...',
  }

  forms.forEach((item: HTMLFormElement) => postFormData(item))

  const postData = async (url: string, data: string) => {
    const result: Response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: data,
    })
    return result.json()
  }

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
      const formData: FormData = new FormData(form)

      const changeToJson = JSON.stringify(Object.fromEntries(formData.entries()))

      postData('https://6027afc0dd4afd001754a9b0.mockapi.io/api/users', changeToJson)
        .then(() => {
          showThanksModal(answerMessage.success)
          statusMessage.remove()
        })
        .catch(() => {
          showThanksModal(answerMessage.error)
        })
        .finally(() => {
          form.reset()
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

  /** Slider */

  const slider: HTMLElement = document.querySelector('.offer__slider')
  const slides: NodeListOf<HTMLElement> = document.querySelectorAll('.offer__slide')
  const previousSlide: HTMLElement = document.querySelector('.offer__slider-prev')
  const nextSlide: HTMLElement = document.querySelector('.offer__slider-next')
  const totalSlides: HTMLElement = document.querySelector('#total')
  const currentSlide: HTMLElement = document.querySelector('#current')
  const sliderIndicators: HTMLElement = document.createElement('ol')
  const sliderDots: HTMLElement[] = []
  let slideIndex: number = 1

  showSliderDots()
  showSlides(slideIndex)
  slideCounter()

  slider.style.position = 'relative'

  sliderIndicators.classList.add('carousel-indicators')
  slider.append(sliderIndicators)

  function slideCounter() {
    if (slides.length < 10) {
      totalSlides.textContent = `0${slides.length}`
    } else {
      totalSlides.textContent = slides.length.toString()
    }
  }

  function showSlides(index: number) {
    if (index > slides.length) {
      slideIndex = 1
    }

    if (index < 1) {
      slideIndex = slides.length
    }

    slides.forEach((item) => (item.style.display = 'none'))
    slides[slideIndex - 1].style.display = 'block'

    if (slides.length < 10) {
      currentSlide.textContent = `0${slideIndex}`
    } else {
      currentSlide.textContent = slideIndex.toString()
    }

    sliderDots.forEach((item) => (item.style.opacity = '.5'))
    sliderDots[slideIndex - 1].style.opacity = (1).toString()
  }

  function showSliderDots() {
    for (let i = 0; i < slides.length; i += 1) {
      const sliderDot: HTMLElement = document.createElement('li')

      sliderDot.classList.add('sliderDot')
      sliderDot.setAttribute('data-slide-to', (i + 1).toString())

      if (i === 0) {
        sliderDot.style.opacity = (1).toString()
      }

      sliderIndicators.append(sliderDot)
      sliderDots.push(sliderDot)
    }
  }

  function switchSlide(num: number) {
    showSlides((slideIndex += num))
    sliderDots[slideIndex - 1].style.opacity = (1).toString()
  }

  previousSlide.addEventListener('click', () => {
    switchSlide(-1)
  })

  nextSlide.addEventListener('click', () => {
    switchSlide(1)
  })
})
