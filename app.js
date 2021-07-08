let database  ={
  page_title:'Basic Form',
  header_title:'Welcome to the form generation and manupulation using javascript',
  download_button:'Download',
  header2_links:['Basic','Register','Login','Mini','Lables on Top','validation','Search'],
  form1TitleHeading:'Form Example',
  formRowName:'Full name',
  formRowName2:'Email',
  formRowName3:'Dropdown',
  formRowInput3:['Option One','Option Two','Option Three','Option Four'],
  formRowName4:'Textarea',

}

// querrselectors
const titleHead = document.querySelector('head');
const body = document.querySelector('body')

// elements created
const title = document.createElement('title');
const stylelink1 = document.createElement('link')
const stylelink2 = document.createElement('link')
const header = document.createElement('header')
const headerTitle = document.createElement('h1')
const downloadLink = document.createElement('a')

title.innerText=database.page_title;
stylelink1.rel = 'stylesheet'
stylelink1.href = 'assets/demo.css'
stylelink2.rel = 'stylesheet'
stylelink2.href = 'assets/form-basic.css'
headerTitle.innerText = database.header_title;
downloadLink.href = "#";
downloadLink.innerText= database.download_button


titleHead.appendChild(title)
titleHead.appendChild(stylelink1)
titleHead.appendChild(stylelink2)
body.appendChild(header)
header.appendChild(headerTitle)
header.appendChild(downloadLink)

const header2 = document.createElement('ul')
const basic = document.createElement('li')
const register= document.createElement('li')
const login= document.createElement('li')
const mini = document.createElement('li')
const labels = document.createElement('li')
const validate = document.createElement('li')
const search= document.createElement('li')

const basicLink  = document.createElement('a')
const registerLink = document.createElement('a')
const loginLink = document.createElement('a')
const miniLink  = document.createElement('a')
const labelsLink  = document.createElement('a')
const validateLink  = document.createElement('a')
const searchLink = document.createElement('a')

basicLink.classList.add('active')
basicLink.innerText = database.header2_links[0]
registerLink.innerText = database.header2_links[1]
loginLink.innerText = database.header2_links[2]
miniLink.innerText = database.header2_links[3]
labelsLink.innerText = database.header2_links[4]
validateLink.innerText = database.header2_links[5]
searchLink.innerText = database.header2_links[6]

basic.appendChild(basicLink)
register.appendChild(registerLink)
login.appendChild(loginLink)
mini.appendChild(miniLink)
labels.appendChild(labelsLink)
validate.appendChild(validateLink)
search.appendChild(searchLink)


body.appendChild(header2)
header2.appendChild(basic)
header2.appendChild(register)
header2.appendChild(login)
header2.appendChild(mini)
header2.appendChild(labels)
header2.appendChild(validate)
header2.appendChild(search)


const mainContent = document.createElement('div')
mainContent.classList.add('main-content')
const forms = document.createElement('form')
forms.classList.add('form-basic')
const formTitle = document.createElement('div')
const formTitleHeading = document.createElement('h1')
formTitleHeading.innerText = database.form1TitleHeading

const formRow = document.createElement('div')
formRow.classList.add('form-row')
const fromRowLabel = document.createElement('label')
const fromRowName = document.createElement('span')
fromRowName.innerText = database.formRowName
const formRowInput = document.createElement('input')
formRowInput.type = 'text'
formRowInput.name = 'name'




const formRow2 = document.createElement('div')
formRow2.classList.add('form-row')
const fromRowLabel2 = document.createElement('label')
const fromRowName2 = document.createElement('span')
fromRowName2.innerText = database.formRowName2
const formRowInput2 = document.createElement('input')
formRowInput2.type = 'email'
formRowInput2.name = 'email'

const formRow3 = document.createElement('div')
formRow3.classList.add('form-row')
const fromRowLabel3 = document.createElement('label')
const fromRowName3 = document.createElement('span')
fromRowName3.innerText = database.formRowName3
const formRowInput3 = document.createElement('select')
formRowInput3.name = 'dropdown'




const formRow4 = document.createElement('div')
formRow4.classList.add('form-row')
const fromRowLabel4 = document.createElement('label')
const fromRowName4 = document.createElement('span')
fromRowName4.innerText = database.formRowName4
const formRowInput4 = document.createElement('textarea')

formRowInput4.name = 'textarea'





body.appendChild(mainContent)
mainContent.appendChild(forms)

form.appendChild(formTitle)
formTitle.appendChild(formTitleHeading)

form.appendChild(formRow)
formRow.appendChild(fromRowLabel)
fromRowLabel.appendChild(fromRowName)
fromRowLabel.appendChild(formRowInput)

form.appendChild(formRow2)
formRow2.appendChild(fromRowLabel2)
fromRowLabel2.appendChild(fromRowName2)
fromRowLabel2.appendChild(formRowInput2)


form.appendChild(formRow3)
formRow3.appendChild(fromRowLabel3)
fromRowLabel3.appendChild(fromRowName3)
fromRowLabel3.appendChild(formRowInput3)
for(let i=0;i<database.formRowInput3.length;i++){
   formRowInput3.appendChild(document.createElement('option').innerText=database.formRowInput3[i])
}


form.appendChild(formRow4)
formRow4.appendChild(fromRowLabel4)
fromRowLabel4.appendChild(fromRowName4)
fromRowLabel4.appendChild(formRowInput4)
