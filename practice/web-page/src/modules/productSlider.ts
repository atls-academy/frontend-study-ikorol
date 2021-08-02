function productSlider({ container, slide, nextArrow, prevArrow, totalCounter, currentCounter }) {
  const slider: HTMLElement = document.querySelector(container)
  const slides: NodeListOf<HTMLElement> = document.querySelectorAll(slide)
  const previousSlide: HTMLElement = document.querySelector(prevArrow)
  const nextSlide: HTMLElement = document.querySelector(nextArrow)
  const totalSlides: HTMLElement = document.querySelector(totalCounter)
  const currentSlide: HTMLElement = document.querySelector(currentCounter)
  const sliderIndicators: HTMLElement = document.createElement('ol')
  const sliderDots: HTMLElement[] = []
  let slideIndex: number = 1

  function showSlides(index: number) {
    if (index > slides.length) {
      slideIndex = 1
    }

    if (index < 1) {
      slideIndex = slides.length
    }

    slides.forEach((item) => {
      let itemStyle = item.style.display
      itemStyle = 'none'
      return itemStyle
    })
    slides[slideIndex - 1].style.display = 'block'

    if (slides.length < 10) {
      currentSlide.textContent = `0${slideIndex}`
    } else {
      currentSlide.textContent = slideIndex.toString()
    }

    sliderDots.forEach((item) => {
      let itemOpacity = item.style.opacity
      itemOpacity = '.5'

      return itemOpacity
    })
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

  function slideCounter() {
    if (slides.length < 10) {
      totalSlides.textContent = `0${slides.length}`
    } else {
      totalSlides.textContent = slides.length.toString()
    }
  }

  showSliderDots()
  showSlides(slideIndex)
  slideCounter()

  slider.style.position = 'relative'

  sliderIndicators.classList.add('sliderIndicators')
  slider.append(sliderIndicators)

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
}

export default productSlider
