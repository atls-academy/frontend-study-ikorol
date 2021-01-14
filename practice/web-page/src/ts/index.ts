window.addEventListener('DOMContentLoaded', () => {

  //Tabs

  const tabs = document.querySelectorAll('.tabheader__item');
  const tabsContent = document.querySelectorAll('.tabcontent');
  const tabsParent = document.querySelector('.tabheader__items');

  function hideTabContent(): void {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    })
  }

  function showTabContent(i: number = 0): void {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();

  function hasClass(element: any, className: string): boolean {
    return (element.className).indexOf(className) > -1;
  }

  tabsParent.addEventListener('click', (e) => {
    const target = e.target;

    if (target && hasClass(target, 'tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target === item) {
          hideTabContent();
          showTabContent(i);
        }
      })
    }
  })

  //Countdown timer

  const deadline: string = '2020-12-31';

  function getTimeRemaining(endTime: string): { total: number, days: number, hours: number, minutes: number, seconds: number } {
    const t: number = Date.parse(endTime) - Date.parse(new Date().toISOString());
    const days: number = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours: number = Math.floor((t / (1000 * 60 * 60) %  24));
    const minutes: number = Math.floor((t / 1000 / 60)  %  60);
    const seconds: number = Math.floor((t / 1000)  %  60);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  function getZero(num: number): string | number {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector: any, endTime: string): void {
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');
    const timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock(): void {
      const t = getTimeRemaining(endTime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if(t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline);

  // Modal window

  const modalTrigger = document.querySelectorAll('[data-modal]');
  const modalWindow = document.querySelector('.modal');
  const modalClose = document.querySelector('[data-close]');

  function openModalWindow(): void {
    modalWindow.classList.toggle('show');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimer);
  }

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModalWindow);
  });

  function closeModalWindow(): void {
    modalWindow.classList.toggle('show');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModalWindow);

  modalWindow.addEventListener('click', (e) => {
    if (e.target === modalWindow) {
      closeModalWindow();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modalWindow.classList.contains('show')) {
      closeModalWindow();
    }
  });

  const modalTimer = setTimeout(openModalWindow, 15000);

  function showModalByScroll(): void {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModalWindow();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  window.addEventListener('scroll', showModalByScroll);
})
