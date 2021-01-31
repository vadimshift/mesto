const formProfileEdit = document.forms.profile //форма редактирования профиля
const formAddPlace = document.forms.place //форма добавления места

const inputNameProfile = formProfileEdit.elements.enterNameProfile //инпут ввода имени
const inputAboutProfile = formProfileEdit.elements.enterAboutProfile //инпут ввода о себе
const inputNamePlace = formAddPlace.elements.enterNamePlace //инпут добавления названия места
const inputLinkPlace = formAddPlace.elements.enterLinkPlace //инпут добавления ссылки места

formProfileEdit.addEventListener('input', function (evt) {
  const isValid = inputNameProfile.value.length > 0 && inputAboutProfile.value.length > 0
})
