const body = document.querySelector('body')
const wrapper = document.createElement('div')
const logo = document.createElement('h1')
const formRapper = document.createElement('div')
const formheading = document.createElement('p')
const form = document.createElement('form')
// fullname
const fullNameRapper = document.createElement('div')
const fullNameInput = document.createElement('input')
const fullNameIcon = document.createElement('span')
// email
const emailRapper = document.createElement('div')
const emailInput = document.createElement('input')
const emailNameIcon = document.createElement('span')

const countryRapper = document.createElement('div')
const countryInput = document.createElement('input')
const countryIcon = document.createElement('span')
const countryDataList = document.createElement('datalist')
// the obtions will be in a loop, looping a database of countries
// zipcode
const zipcodeRapper = document.createElement('div')
const zipcodeInput = document.createElement('input')
const zipcodeIcon = document.createElement('span')
// agree to terms
const termsRapper = document.createElement('div')
const termsInput = document.createElement('input')
const termsIcon = document.createElement('span')


const registerButtonRapper = document.createElement('div')
const registerButtonInput = document.createElement('input')
const registerButtonIcon = document.createElement('span')

const registerOr = document.createElement('h3')

const facebookButtonRapper = document.createElement('div')
const facebookButtonInput = document.createElement('input')
const facebookButtonIcon = document.createElement('span')

const googleButtonRapper = document.createElement('div')
const googleButtonInput = document.createElement('input')
const googleButtonIcon = document.createElement('span')

const logInLink = document.createElement('a')

logo.classList.add('logo')
logo.innerText = 'Rform'
formheading.classList.add('form-heading')
formheading.innerText = 'Register a new member'

body.appendChild(wrapper)
wrapper.appendChild(logo)
wrapper.appendChild(formRapper)
formRapper.appendChild(formheading)
formRapper.appendChild(form)
form.appendChild(fullNameRapper)
fullNameRapper.appendChild(fullNameInput)
fullNameRapper.appendChild(fullNameIcon)

form.appendChild(emailRapper)
emailRapper.appendChild(emailInput)
emailRapper.appendChild(emailNameIcon)

form.appendChild(countryRapper)
countryRapper.appendChild(countryInput)
countryRapper.appendChild(countryIcon)
countryRapper.appendChild(countryDataList)


form.appendChild(zipcodeRapper)
zipcodeRapper.appendChild(zipcodeInput)
zipcodeRapper.appendChild(zipcodeIcon)

form.appendChild(termsRapper)
termsRapper.appendChild(termsInput)
termsRapper.appendChild(termsIcon)

form.appendChild(registerButtonRapper)
registerButtonRapper.appendChild(registerButtonInput)
registerButtonRapper.appendChild(registerButtonIcon)

form.appendChild(registerOr)

form.appendChild(facebookButtonRapper)
facebookButtonRapper.appendChild(facebookButtonInput)
facebookButtonRapper.appendChild(facebookButtonIcon)

form.appendChild(googleButtonRapper)
googleButtonRapper.appendChild(googleButtonInput)
googleButtonRapper.appendChild(registerButtonIcon)

form.appendChild(logInLink)
