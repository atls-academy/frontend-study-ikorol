function calorieCalculator() {
  const calcResult = document.querySelector('.calculating__result span')
  let sex: string
  let height: number
  let weight: number
  let age: number
  let ratio: number

  if (localStorage.getItem('sex')) {
    sex = localStorage.getItem('sex')
  } else {
    sex = 'female'
    localStorage.setItem('sex', 'female')
  }

  if (localStorage.getItem('ratio')) {
    ratio = +localStorage.getItem('ratio')
  } else {
    ratio = 1.375
    localStorage.setItem('ratio', '1.375')
  }

  function initLocalSettings(selector, activeClass) {
    const activeElements: NodeListOf<HTMLElement> = document.querySelectorAll(selector)

    activeElements.forEach((activeElement) => {
      activeElement.classList.remove(activeClass)

      if (activeElement.getAttribute('id') === localStorage.getItem('sex')) {
        activeElement.classList.add(activeClass)
      }

      if (activeElement.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
        activeElement.classList.add(activeClass)
      }
    })
  }

  initLocalSettings('#gender div', 'calculating__choose-item_active')
  initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active')

  function calcTotal() {
    if (!sex || !height || !weight || !age || !ratio) {
      calcResult.textContent = '____'
      return
    }

    if (sex === 'female') {
      calcResult.textContent = Math.round(
        (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio
      ).toString()
    } else {
      calcResult.textContent = Math.round(
        (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio
      ).toString()
    }
  }

  calcTotal()

  function getStaticInformation(selector, activeClass) {
    const elements: NodeListOf<HTMLElement> = document.querySelectorAll(selector)

    elements.forEach((elem: HTMLElement) => {
      elem.addEventListener('click', (event: Event) => {
        if ((event.target as HTMLElement).getAttribute('data-ratio')) {
          ratio = +(event.target as HTMLElement).getAttribute('data-ratio')
          localStorage.setItem('ratio', (event.target as HTMLElement).getAttribute('data-ratio'))
        } else {
          sex = (event.target as HTMLElement).getAttribute('id')
          localStorage.setItem('sex', (event.target as HTMLElement).getAttribute('id'))
        }

        elements.forEach((el) => {
          el.classList.remove(activeClass)
        })
        ;(event.target as HTMLElement).classList.add(activeClass)

        calcTotal()
      })
    })
  }

  getStaticInformation('#gender div', 'calculating__choose-item_active')
  getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active')

  function getDynamicInformation(selector) {
    const input = document.querySelector(selector)

    input.addEventListener('input', () => {
      if (input.value.match(/\D/g)) {
        input.style = 'box-shadow: 0 0 10px rgba(0,0,0,0.5)'
        input.style.border = '1px solid rgba(247, 104, 104, 0.73)'
      } else {
        input.style = 'box-shadow: 0 4px 15px rgb(0 0 0 / 20%)'
        input.style.border = 'none'
      }

      switch (input.getAttribute('id')) {
        case 'height':
          height = +input.value
          break
        case 'weight':
          weight = +input.value
          break
        case 'age':
          age = +input.value
          break
        default:
          return
      }
      calcTotal()
    })
  }

  getDynamicInformation('#height')
  getDynamicInformation('#weight')
  getDynamicInformation('#age')
}

export default calorieCalculator
