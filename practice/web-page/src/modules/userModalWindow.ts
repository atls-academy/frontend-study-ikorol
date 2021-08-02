function openModalWindow(modalSelector, modalTimer) {
  const modalWindow = document.querySelector(modalSelector)

  modalWindow.classList.toggle('show')
  document.body.style.overflow = 'hidden'

  if (modalTimer) {
    clearInterval(modalTimer)
  }
}

function closeModalWindow(modalSelector) {
  const modalWindow = document.querySelector(modalSelector)

  modalWindow.classList.toggle('show')
  document.body.style.overflow = ''
}

function userModalWindow(triggerSelector, modalSelector, modalTimer) {
  const modalTrigger = document.querySelectorAll(triggerSelector)
  const modalWindow = document.querySelector(modalSelector)

  modalTrigger.forEach((btn) => {
    btn.addEventListener('click', () => openModalWindow(modalSelector, modalTimer))
  })

  modalWindow.addEventListener('click', (e) => {
    const el = e.target as HTMLInputElement
    if (el === modalWindow || el.getAttribute('data-close') === '') {
      closeModalWindow(modalSelector)
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
      closeModalWindow(modalSelector)
    }
  })

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModalWindow(modalSelector, modalTimer)
      window.removeEventListener('scroll', showModalByScroll)
    }
  }

  window.addEventListener('scroll', showModalByScroll)
}

export default userModalWindow
export { closeModalWindow }
export { openModalWindow }
