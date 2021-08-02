import { postData }                          from '../services/services'
import { closeModalWindow, openModalWindow } from './userModalWindow'

function userForms(formSelector, modalTimer) {
  const forms = document.querySelectorAll(formSelector)
  const answerMessage: { loading: string; success: string; error: string } = {
    loading: '../src/assets/img/form/spinner.svg',
    success: 'Спасибо, скоро мы с Вами свяжемся',
    error: 'Что-то пошло не так...',
  }

  function showThanksModal(messageValue: string) {
    const previousModalDialog: HTMLElement = document.querySelector('.modal__dialog')

    previousModalDialog.classList.add('hide')
    openModalWindow('.modal', modalTimer)

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
      closeModalWindow('.modal')
    }, 4000)
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

  forms.forEach((item: HTMLFormElement) => postFormData(item))
}

export default userForms
