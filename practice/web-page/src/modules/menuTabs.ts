function menuTabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
  const tabs = document.querySelectorAll(tabsSelector)
  const tabsContent = document.querySelectorAll(tabsContentSelector)
  const tabsParent: HTMLElement = document.querySelector(tabsParentSelector)

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide')
      item.classList.remove('show', 'fade')
    })

    tabs.forEach(item => {
      item.classList.remove(activeClass)
    })
  }

  function showTabContent(i: number = 0) {
    tabsContent[i].classList.add('show', 'fade')
    tabsContent[i].classList.remove('hide')
    tabs[i].classList.add(activeClass)
  }

  hideTabContent()
  showTabContent()

  function hasClass(element: any, className: string): boolean {
    return element.className.indexOf(className) > -1
  }

  tabsParent.addEventListener('click', e => {
    const { target } = e

    if (target && hasClass(target, tabsSelector.slice(1))) {
      tabs.forEach((item, i) => {
        if (target === item) {
          hideTabContent()
          showTabContent(i)
        }
      })
    }
  })
}

export default menuTabs
