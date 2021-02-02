window.addEventListener('DOMContentLoaded', () => {
  // Tabs

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

  // Countdown timer

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

  // Modal window

  const modalTrigger = document.querySelectorAll('[data-modal]')
  const modalWindow = document.querySelector('.modal')
  const modalClose = document.querySelector('[data-close]')

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

  modalClose.addEventListener('click', closeModalWindow)

  modalWindow.addEventListener('click', (e) => {
    if (e.target === modalWindow) {
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
})
