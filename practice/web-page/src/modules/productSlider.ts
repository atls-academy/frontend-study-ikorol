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

  showSliderDots()
  showSlides(slideIndex)
  slideCounter()

  slider.style.position = 'relative'

  sliderIndicators.classList.add('sliderIndicators')
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
}

export default productSlider
