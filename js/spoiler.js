function getSpoilers() {
  const spoilersName = Array.from(document.getElementsByClassName('spoiler__title'))
  const spoilers = Array.from(document.getElementsByClassName('spoiler__description'))

  spoilersName.forEach((elem) => {
    elem.addEventListener('click', function (event) {
      spoilers.forEach((item) => {
        this.nextElementSibling.classList.toggle('hide')
      })
      elem.classList.toggle('spoiler__title_active')
    })
  })
}