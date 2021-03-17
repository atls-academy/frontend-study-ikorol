import calorieCalculator                    from './modules/calorieCalculator'
import countdownTimer                       from './modules/countdownTimer'
import menuCards                            from './modules/menuCards'
import menuTabs                             from './modules/menuTabs'
import productSlider                        from './modules/productSlider'
import userForms                            from './modules/userForms'
import userModalWindow, { openModalWindow } from './modules/userModalWindow'

window.addEventListener('DOMContentLoaded', () => {
  const modalTimer = setTimeout(() => openModalWindow('.modal', modalTimer), 15000)

  menuTabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active')
  calorieCalculator()
  menuCards()
  countdownTimer('.timer', '2021-12-31')
  userForms('form', modalTimer)
  userModalWindow('[data-modal]', '.modal', modalTimer)
  productSlider({
    container: '.offer__slider',
    slide: '.offer__slide',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    totalCounter: '#total',
    currentCounter: '#current',
  })
})
