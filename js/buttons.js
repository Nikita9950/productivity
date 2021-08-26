function getButtons() {
  const simpleButtons = Array.from(document.getElementsByClassName('simple-button'))
  const aboutUsButtons = Array.from(document.getElementsByClassName('about-us__simple-button'))
  const planButtons = Array.from(document.getElementsByClassName('plan__button'))
  const getStartedButton = Array.from(document.getElementsByClassName('get-started__button'))
  const slideArrowButton = Array.from(document.getElementsByClassName('slide__arrow'))

  simpleButtons.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      event.preventDefault()
      elem.classList.toggle('simple-button_active')
    })
  })

  aboutUsButtons.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      event.preventDefault()
      aboutUsButtons.forEach((item) => {
        item.classList.remove('about-us__simple-button_active-red')
      })
      elem.classList.add('about-us__simple-button_active-red')
    })
  })

  planButtons.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      event.preventDefault()
      planButtons.forEach((item) => {
        item.classList.remove('plan__button_active')
      })
      elem.classList.add('plan__button_active')
    })
  })

  getStartedButton.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      event.preventDefault()
      getStartedButton.forEach((item) => {
        item.classList.remove('get-started__button_active')
      })
      elem.classList.add('get-started__button_active')
    })
  })

  slideArrowButton.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      elem.classList.toggle('slide__arrow_active')
    })
  })
}