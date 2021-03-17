function countdownTimer(id, deadline) {
  function getTimeRemaining(
    endTime: string,
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
    const timeInterval: number = 1000

    function disableTimer(currentTime, interval) {
      if (currentTime <= 0) {
        clearInterval(interval)
      }
    }

    function updateClock() {
      const clock = getTimeRemaining(endTime)

      days.innerHTML = getZero(clock.days)
      hours.innerHTML = getZero(clock.hours)
      minutes.innerHTML = getZero(clock.minutes)
      seconds.innerHTML = getZero(clock.seconds)

      disableTimer(clock.total, timeInterval)
    }

    const startTimer = () => setInterval(updateClock, timeInterval)

    updateClock()
    startTimer()
  }

  setClock(id, deadline)
}

export default countdownTimer
