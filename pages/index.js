let editButton = document.querySelector('.profile__edit-button')
let openPopup = document.querySelector('.popup')
let closePopup = document.querySelector('.popup__close-button')
let likeButton = document.querySelector('.element__like-button')

editButton.addEventListener('click', () => {
  openPopup.classList.add('popup_active')
})

closePopup.addEventListener('click', () => {
  openPopup.classList.remove('popup_active')
})

likeButton.addEventListener('click' , () => {
  likeButton.classList.toggle('element__like-button_active')
})

