let database  ={
  page_title:'Basic Form',
  header_title:'Welcome to the form generation and manupulation using javascript',
  download_button:'Download',
  header2_links:['Basic','Register','Login','Mini','Lables on Top','validation','Search'],
  form1TitleHeading:'Odin Form Example',
  formRowName:'Full name',
  formRowName2:'Email',
  formRowName21:'Zip Code',
  formRowName22:'Password',
  formRowName23:'Password Confirmation',
  formRowName3:'Country',
  formRowInput3:[
  {name: 'Afghanistan', code: 'AF'},
  {name: 'Åland Islands', code: 'AX'},
  {name: 'Albania', code: 'AL'},
  {name: 'Algeria', code: 'DZ'},
  {name: 'American Samoa', code: 'AS'},
  {name: 'AndorrA', code: 'AD'},
  {name: 'Angola', code: 'AO'},
  {name: 'Anguilla', code: 'AI'},
  {name: 'Antarctica', code: 'AQ'},
  {name: 'Antigua and Barbuda', code: 'AG'},
  {name: 'Argentina', code: 'AR'},
  {name: 'Armenia', code: 'AM'},
  {name: 'Aruba', code: 'AW'},
  {name: 'Australia', code: 'AU'},
  {name: 'Austria', code: 'AT'},
  {name: 'Azerbaijan', code: 'AZ'},
  {name: 'Bahamas', code: 'BS'},
  {name: 'Bahrain', code: 'BH'},
  {name: 'Bangladesh', code: 'BD'},
  {name: 'Barbados', code: 'BB'},
  {name: 'Belarus', code: 'BY'},
  {name: 'Belgium', code: 'BE'},
  {name: 'Belize', code: 'BZ'},
  {name: 'Benin', code: 'BJ'},
  {name: 'Bermuda', code: 'BM'},
  {name: 'Bhutan', code: 'BT'},
  {name: 'Bolivia', code: 'BO'},
  {name: 'Bosnia and Herzegovina', code: 'BA'},
  {name: 'Botswana', code: 'BW'},
  {name: 'Bouvet Island', code: 'BV'},
  {name: 'Brazil', code: 'BR'},
  {name: 'British Indian Ocean Territory', code: 'IO'},
  {name: 'Brunei Darussalam', code: 'BN'},
  {name: 'Bulgaria', code: 'BG'},
  {name: 'Burkina Faso', code: 'BF'},
  {name: 'Burundi', code: 'BI'},
  {name: 'Cambodia', code: 'KH'},
  {name: 'Cameroon', code: 'CM'},
  {name: 'Canada', code: 'CA'},
  {name: 'Cape Verde', code: 'CV'},
  {name: 'Cayman Islands', code: 'KY'},
  {name: 'Central African Republic', code: 'CF'},
  {name: 'Chad', code: 'TD'},
  {name: 'Chile', code: 'CL'},
  {name: 'China', code: 'CN'},
  {name: 'Christmas Island', code: 'CX'},
  {name: 'Cocos (Keeling) Islands', code: 'CC'},
  {name: 'Colombia', code: 'CO'},
  {name: 'Comoros', code: 'KM'},
  {name: 'Congo', code: 'CG'},
  {name: 'Congo, The Democratic Republic of the', code: 'CD'},
  {name: 'Cook Islands', code: 'CK'},
  {name: 'Costa Rica', code: 'CR'},
  {name: 'Cote D\'Ivoire', code: 'CI'},
  {name: 'Croatia', code: 'HR'},
  {name: 'Cuba', code: 'CU'},
  {name: 'Cyprus', code: 'CY'},
  {name: 'Czech Republic', code: 'CZ'},
  {name: 'Denmark', code: 'DK'},
  {name: 'Djibouti', code: 'DJ'},
  {name: 'Dominica', code: 'DM'},
  {name: 'Dominican Republic', code: 'DO'},
  {name: 'Ecuador', code: 'EC'},
  {name: 'Egypt', code: 'EG'},
  {name: 'El Salvador', code: 'SV'},
  {name: 'Equatorial Guinea', code: 'GQ'},
  {name: 'Eritrea', code: 'ER'},
  {name: 'Estonia', code: 'EE'},
  {name: 'Ethiopia', code: 'ET'},
  {name: 'Falkland Islands (Malvinas)', code: 'FK'},
  {name: 'Faroe Islands', code: 'FO'},
  {name: 'Fiji', code: 'FJ'},
  {name: 'Finland', code: 'FI'},
  {name: 'France', code: 'FR'},
  {name: 'French Guiana', code: 'GF'},
  {name: 'French Polynesia', code: 'PF'},
  {name: 'French Southern Territories', code: 'TF'},
  {name: 'Gabon', code: 'GA'},
  {name: 'Gambia', code: 'GM'},
  {name: 'Georgia', code: 'GE'},
  {name: 'Germany', code: 'DE'},
  {name: 'Ghana', code: 'GH'},
  {name: 'Gibraltar', code: 'GI'},
  {name: 'Greece', code: 'GR'},
  {name: 'Greenland', code: 'GL'},
  {name: 'Grenada', code: 'GD'},
  {name: 'Guadeloupe', code: 'GP'},
  {name: 'Guam', code: 'GU'},
  {name: 'Guatemala', code: 'GT'},
  {name: 'Guernsey', code: 'GG'},
  {name: 'Guinea', code: 'GN'},
  {name: 'Guinea-Bissau', code: 'GW'},
  {name: 'Guyana', code: 'GY'},
  {name: 'Haiti', code: 'HT'},
  {name: 'Heard Island and Mcdonald Islands', code: 'HM'},
  {name: 'Holy See (Vatican City State)', code: 'VA'},
  {name: 'Honduras', code: 'HN'},
  {name: 'Hong Kong', code: 'HK'},
  {name: 'Hungary', code: 'HU'},
  {name: 'Iceland', code: 'IS'},
  {name: 'India', code: 'IN'},
  {name: 'Indonesia', code: 'ID'},
  {name: 'Iran, Islamic Republic Of', code: 'IR'},
  {name: 'Iraq', code: 'IQ'},
  {name: 'Ireland', code: 'IE'},
  {name: 'Isle of Man', code: 'IM'},
  {name: 'Israel', code: 'IL'},
  {name: 'Italy', code: 'IT'},
  {name: 'Jamaica', code: 'JM'},
  {name: 'Japan', code: 'JP'},
  {name: 'Jersey', code: 'JE'},
  {name: 'Jordan', code: 'JO'},
  {name: 'Kazakhstan', code: 'KZ'},
  {name: 'Kenya', code: 'KE'},
  {name: 'Kiribati', code: 'KI'},
  {name: 'Korea, Democratic People\'S Republic of', code: 'KP'},
  {name: 'Korea, Republic of', code: 'KR'},
  {name: 'Kuwait', code: 'KW'},
  {name: 'Kyrgyzstan', code: 'KG'},
  {name: 'Lao People\'S Democratic Republic', code: 'LA'},
  {name: 'Latvia', code: 'LV'},
  {name: 'Lebanon', code: 'LB'},
  {name: 'Lesotho', code: 'LS'},
  {name: 'Liberia', code: 'LR'},
  {name: 'Libyan Arab Jamahiriya', code: 'LY'},
  {name: 'Liechtenstein', code: 'LI'},
  {name: 'Lithuania', code: 'LT'},
  {name: 'Luxembourg', code: 'LU'},
  {name: 'Macao', code: 'MO'},
  {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
  {name: 'Madagascar', code: 'MG'},
  {name: 'Malawi', code: 'MW'},
  {name: 'Malaysia', code: 'MY'},
  {name: 'Maldives', code: 'MV'},
  {name: 'Mali', code: 'ML'},
  {name: 'Malta', code: 'MT'},
  {name: 'Marshall Islands', code: 'MH'},
  {name: 'Martinique', code: 'MQ'},
  {name: 'Mauritania', code: 'MR'},
  {name: 'Mauritius', code: 'MU'},
  {name: 'Mayotte', code: 'YT'},
  {name: 'Mexico', code: 'MX'},
  {name: 'Micronesia, Federated States of', code: 'FM'},
  {name: 'Moldova, Republic of', code: 'MD'},
  {name: 'Monaco', code: 'MC'},
  {name: 'Mongolia', code: 'MN'},
  {name: 'Montserrat', code: 'MS'},
  {name: 'Morocco', code: 'MA'},
  {name: 'Mozambique', code: 'MZ'},
  {name: 'Myanmar', code: 'MM'},
  {name: 'Namibia', code: 'NA'},
  {name: 'Nauru', code: 'NR'},
  {name: 'Nepal', code: 'NP'},
  {name: 'Netherlands', code: 'NL'},
  {name: 'Netherlands Antilles', code: 'AN'},
  {name: 'New Caledonia', code: 'NC'},
  {name: 'New Zealand', code: 'NZ'},
  {name: 'Nicaragua', code: 'NI'},
  {name: 'Niger', code: 'NE'},
  {name: 'Nigeria', code: 'NG'},
  {name: 'Niue', code: 'NU'},
  {name: 'Norfolk Island', code: 'NF'},
  {name: 'Northern Mariana Islands', code: 'MP'},
  {name: 'Norway', code: 'NO'},
  {name: 'Oman', code: 'OM'},
  {name: 'Pakistan', code: 'PK'},
  {name: 'Palau', code: 'PW'},
  {name: 'Palestinian Territory, Occupied', code: 'PS'},
  {name: 'Panama', code: 'PA'},
  {name: 'Papua New Guinea', code: 'PG'},
  {name: 'Paraguay', code: 'PY'},
  {name: 'Peru', code: 'PE'},
  {name: 'Philippines', code: 'PH'},
  {name: 'Pitcairn', code: 'PN'},
  {name: 'Poland', code: 'PL'},
  {name: 'Portugal', code: 'PT'},
  {name: 'Puerto Rico', code: 'PR'},
  {name: 'Qatar', code: 'QA'},
  {name: 'Reunion', code: 'RE'},
  {name: 'Romania', code: 'RO'},
  {name: 'Russian Federation', code: 'RU'},
  {name: 'RWANDA', code: 'RW'},
  {name: 'Saint Helena', code: 'SH'},
  {name: 'Saint Kitts and Nevis', code: 'KN'},
  {name: 'Saint Lucia', code: 'LC'},
  {name: 'Saint Pierre and Miquelon', code: 'PM'},
  {name: 'Saint Vincent and the Grenadines', code: 'VC'},
  {name: 'Samoa', code: 'WS'},
  {name: 'San Marino', code: 'SM'},
  {name: 'Sao Tome and Principe', code: 'ST'},
  {name: 'Saudi Arabia', code: 'SA'},
  {name: 'Senegal', code: 'SN'},
  {name: 'Serbia and Montenegro', code: 'CS'},
  {name: 'Seychelles', code: 'SC'},
  {name: 'Sierra Leone', code: 'SL'},
  {name: 'Singapore', code: 'SG'},
  {name: 'Slovakia', code: 'SK'},
  {name: 'Slovenia', code: 'SI'},
  {name: 'Solomon Islands', code: 'SB'},
  {name: 'Somalia', code: 'SO'},
  {name: 'South Africa', code: 'ZA'},
  {name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
  {name: 'Spain', code: 'ES'},
  {name: 'Sri Lanka', code: 'LK'},
  {name: 'Sudan', code: 'SD'},
  {name: 'Suriname', code: 'SR'},
  {name: 'Svalbard and Jan Mayen', code: 'SJ'},
  {name: 'Swaziland', code: 'SZ'},
  {name: 'Sweden', code: 'SE'},
  {name: 'Switzerland', code: 'CH'},
  {name: 'Syrian Arab Republic', code: 'SY'},
  {name: 'Taiwan, Province of China', code: 'TW'},
  {name: 'Tajikistan', code: 'TJ'},
  {name: 'Tanzania, United Republic of', code: 'TZ'},
  {name: 'Thailand', code: 'TH'},
  {name: 'Timor-Leste', code: 'TL'},
  {name: 'Togo', code: 'TG'},
  {name: 'Tokelau', code: 'TK'},
  {name: 'Tonga', code: 'TO'},
  {name: 'Trinidad and Tobago', code: 'TT'},
  {name: 'Tunisia', code: 'TN'},
  {name: 'Turkey', code: 'TR'},
  {name: 'Turkmenistan', code: 'TM'},
  {name: 'Turks and Caicos Islands', code: 'TC'},
  {name: 'Tuvalu', code: 'TV'},
  {name: 'Uganda', code: 'UG'},
  {name: 'Ukraine', code: 'UA'},
  {name: 'United Arab Emirates', code: 'AE'},
  {name: 'United Kingdom', code: 'GB'},
  {name: 'United States', code: 'US'},
  {name: 'United States Minor Outlying Islands', code: 'UM'},
  {name: 'Uruguay', code: 'UY'},
  {name: 'Uzbekistan', code: 'UZ'},
  {name: 'Vanuatu', code: 'VU'},
  {name: 'Venezuela', code: 'VE'},
  {name: 'Viet Nam', code: 'VN'},
  {name: 'Virgin Islands, British', code: 'VG'},
  {name: 'Virgin Islands, U.S.', code: 'VI'},
  {name: 'Wallis and Futuna', code: 'WF'},
  {name: 'Western Sahara', code: 'EH'},
  {name: 'Yemen', code: 'YE'},
  {name: 'Zambia', code: 'ZM'},
  {name: 'Zimbabwe', code: 'ZW'}
],
  formRowName4:'Any Wories?',
  formRowName5:'Terms And Agreement',
  radio:['Agreed to Terms','Do not Agree to Terms','Did not Read Terms'],
  submitButton:'Submit Form'

}
// querrselectors
const titleHead = document.querySelector('head');
const body = document.querySelector('body');

function clearElement(element){
  element.remove();
}



function pageLoading(){
  const title = document.createElement('title');
  const stylelink1 = document.createElement('link')
  const stylelink2 = document.createElement('link')
  const header = document.createElement('header')
  const headerTitle = document.createElement('h1')
  const downloadLink = document.createElement('a')


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


    title.innerText=database.page_title;
    stylelink1.rel = 'stylesheet'
    stylelink1.href = 'assets/styles.css'
    headerTitle.innerText = database.header_title;
    downloadLink.href = "#";
    downloadLink.innerText= database.download_button



    basicLink.innerText = database.header2_links[0]
    registerLink.innerText = database.header2_links[1]
    loginLink.innerText = database.header2_links[2]
    miniLink.innerText = database.header2_links[3]
    labelsLink.innerText = database.header2_links[4]
    validateLink.innerText = database.header2_links[5]
    searchLink.innerText = database.header2_links[6]

    basicLink.classList.add('class0')
    registerLink.classList.add('class1')
    loginLink.classList.add('class2')
    miniLink.classList.add('class3')
    labelsLink.classList.add('class4')
    validateLink.classList.add('class5')
    searchLink.classList.add('class6')



      titleHead.appendChild(title)
      titleHead.appendChild(stylelink1)
      titleHead.appendChild(stylelink2)
      body.appendChild(header)
      header.appendChild(headerTitle)
      header.appendChild(downloadLink)




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



}

function showSuccess(input){
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove('error');
  formField.classList.add('success');

  // hide the error message
  const error = formField.querySelector('small');
  error.textContent = '';
}
function isRequired(value){
  if(value===''){
    return false
  }else return true;
}
function isBetween(length,min,max){
  if (length<min || length >max ){
    return false;
  }else return true;

}
function showError(input,message){
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove('success');
  formField.classList.add('error');


      // show the error message
      const error = formField.querySelector('small');
      error.textContent = message;
}
function form1validation(){

const sumbmitForm1 = document.querySelector('#submit')
const usernameEl = document.querySelector('#name');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirmPassword');

// const form = document.querySelector('#signup');
sumbmitForm1.addEventListener('click', validation)
function validation(e){
    // console.log(sumbmitForm1)
      e.preventDefault();
      function checkUsername(){
        let valid =false;
        const min =3;
        const max =25;
        // username value

        const username = usernameEl.value.trim();
        console.log(username)
        if (!isRequired(username)) {
            showError(usernameEl, 'Username cannot be blank.');
        }
        else if (!isBetween(username.length, min, max)) {
            showError(usernameEl, 'Username must be between '+min+' and 25 characters.'+max)
        } else {
            showSuccess(usernameEl);
            valid = true;3
        }
        return valid;


      }
      function checkEmail(){
        let valid = false;
        const email = emailEl.value.trim();
        if (!isRequired(email)) {
            showError(emailEl, 'Email cannot be blank.');
        } else if (!isEmailValid(email)) {
            showError(emailEl, 'Email is not valid.')
        } else {
            showSuccess(emailEl);
            valid = true;
        }
        return valid;
      }
      function isPasswordSecure(password){
        const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return re.test(password);
      }
      function isEmailValid(email){
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
      function checkPassword(){
        let valid = false;


        const password = passwordEl.value.trim();

        if (!isRequired(password)) {
            showError(passwordEl, 'Password cannot be blank.');
        } else if (!isPasswordSecure(password)) {
            showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
        } else {
            showSuccess(passwordEl);
            valid = true;
        }

        return valid;
      }
      function checkConfirmPassword(){
        let valid = false;
        // check confirm password
        const confirmPassword = confirmPasswordEl.value.trim();
        const password = passwordEl.value.trim();

        if (!isRequired(confirmPassword)) {
            showError(confirmPasswordEl, 'Please enter the password again');
        } else if (password !== confirmPassword) {
            showError(confirmPasswordEl, 'The password does not match');
        } else {
            showSuccess(confirmPasswordEl);
            valid = true;
        }

        return valid;
      }

      checkConfirmPassword()
      checkPassword();
      checkUsername();
      checkEmail()
  }

}

function basicForm(){
  // elements created

  const mainContent = document.createElement('div')
  const forms = document.createElement('form')
  const formTitle = document.createElement('div')
  const formTitleHeading = document.createElement('h1')
  const formRow = document.createElement('div')
  const fromRowLabel = document.createElement('label')
  const formRowInput = document.createElement('input')
  const fromRowName = document.createElement('span')
  const fromRowMessage = document.createElement('small')


  const formRow2 = document.createElement('div')
  const fromRowLabel2 = document.createElement('label')
  const fromRowName2 = document.createElement('span')
  const formRowInput2 = document.createElement('input')
  const fromRowMessage2 = document.createElement('small')



    const formRow21 = document.createElement('div')
    const fromRowLabel21 = document.createElement('label')
    const fromRowName21 = document.createElement('span')
    const formRowInput21 = document.createElement('input')
    const fromRowMessage21 = document.createElement('small')


    const formRow22 = document.createElement('div')
    const fromRowLabel22 = document.createElement('label')
    const fromRowName22 = document.createElement('span')
    const formRowInput22 = document.createElement('input')
    const fromRowMessage22 = document.createElement('small')


    const formRow23 = document.createElement('div')
    const fromRowLabel23 = document.createElement('label')
    const fromRowName23 = document.createElement('span')
    const formRowInput23 = document.createElement('input')
    const fromRowMessage23 = document.createElement('small')

  const formRow3 = document.createElement('div')
  const fromRowLabel3 = document.createElement('label')
  const fromRowName3 = document.createElement('span')
  const formRowInput3 = document.createElement('select')
  const fromRowMessage3 = document.createElement('small')

  const formRow4 = document.createElement('div')
  const fromRowLabel4 = document.createElement('label')
  const fromRowName4 = document.createElement('span')
  const formRowInput4 = document.createElement('textarea')
  const fromRowMessage4 = document.createElement('small')


  const formRow5 = document.createElement('div')
  const fromRowLabel5 = document.createElement('label')
  const fromRowName5 = document.createElement('span')
  const fromRowMessage5 = document.createElement('small')
  const radioButtonDiv=document.createElement('div')
  const radioButtonDivIner = document.createElement('div')
  const radioButtonDivLabel = document.createElement('label')
  const radioButtonDivSpan = document.createElement('span')



  const radioButtonDivInput = document.createElement('input')
  const radioButtonDivIner2 = document.createElement('div')
  const radioButtonDivLabel2 = document.createElement('label')
  const radioButtonDivInput2 = document.createElement('input')
  const radioButtonDivSpan2 = document.createElement('span')


  const radioButtonDivIner3 = document.createElement('div')
  const radioButtonDivLabel3 = document.createElement('label')
  const radioButtonDivInput3 = document.createElement('input')
  const radioButtonDivSpan3 = document.createElement('span')
  const formRow6 = document.createElement('div')
  const formRowButton6 = document.createElement('button')







  mainContent.classList.add('main-content')
  forms.classList.add('form-basic')
  forms.action=""
  forms.onsubmit="return validateForm()"
  formTitle.classList.add('form-title-row')
  formTitleHeading.innerText = database.form1TitleHeading

  formRow.classList.add('form-row')
  fromRowName.innerText = database.formRowName
  formRowInput.type = 'text'
  formRowInput.name = 'name'
  formRowInput.id="name"
  formRowInput.onblur="validateName(name)"



  formRow2.classList.add('form-row')
  fromRowName2.innerText = database.formRowName2
  formRowInput2.type = 'email'
  formRowInput2.name = 'email'
  formRowInput2.id = 'email'

  formRow21.classList.add('form-row')
  fromRowName21.innerText = database.formRowName21
  formRowInput21.type = 'number'
  formRowInput21.id = 'number'

  formRow22.classList.add('form-row')
  fromRowName22.innerText = database.formRowName22
  formRowInput22.type = 'password'
  formRowInput22.id = 'password'

  formRow23.classList.add('form-row')
  fromRowName23.innerText = database.formRowName23
  formRowInput23.type = 'password'
  formRowInput23.id = 'confirmPassword'


  formRow3.classList.add('form-row')
  fromRowName3.innerText = database.formRowName3
  formRowInput3.name = 'dropdown'
  formRowInput3.id = 'dropdown'




  formRow4.classList.add('form-row')
  fromRowName4.innerText = database.formRowName4
  formRowInput4.name = 'textarea'
  formRowInput4.id = 'textarea'

  formRow5.classList.add('form-row')
  fromRowName5.innerText = database.formRowName5
  radioButtonDiv.classList.add('form-radio-buttons')
  radioButtonDivInput.type = 'radio'
  radioButtonDivInput.name = 'radio'
  radioButtonDivInput.id = 'radio'
  radioButtonDivSpan.innerText = database.radio[0];



  radioButtonDivInput2.type = 'radio'
  radioButtonDivInput2.name = 'radio1'
  radioButtonDivInput2.id = 'radio1'
  radioButtonDivSpan2.innerText = database.radio[1];



  radioButtonDivInput3.type = 'radio'
  radioButtonDivInput3.name = 'radio2'
  radioButtonDivInput3.id = 'radio2'
  radioButtonDivSpan3.innerText = database.radio[2];


  formRow6.classList.add('form-row')
  formRowButton6.type = 'submit'
  formRowButton6.id="submit"
  // formRowButton6.name="submit"
  // formRowButton6.value="Submit"
  formRowButton6.innerText = database.submitButton





  body.appendChild(mainContent)
  mainContent.appendChild(forms)

  forms.appendChild(formTitle)
  formTitle.appendChild(formTitleHeading)

  forms.appendChild(formRow)
  formRow.appendChild(fromRowLabel)
  fromRowLabel.appendChild(fromRowName)
  fromRowLabel.appendChild(formRowInput)
  fromRowLabel.appendChild(fromRowMessage)


  forms.appendChild(formRow2)
  formRow2.appendChild(fromRowLabel2)
  fromRowLabel2.appendChild(fromRowName2)
  fromRowLabel2.appendChild(formRowInput2)
  fromRowLabel2.appendChild(fromRowMessage2)




  forms.appendChild(formRow3)
  formRow3.appendChild(fromRowLabel3)
  fromRowLabel3.appendChild(fromRowName3)
  fromRowLabel3.appendChild(formRowInput3)
  for(let i=0;i<database.formRowInput3.length;i++){
  const test = document.createElement('option')
  test.innerText=database.formRowInput3[i].name
  formRowInput3.appendChild(test)
  }
  fromRowLabel3.appendChild(fromRowMessage3)


  forms.appendChild(formRow21)
  formRow21.appendChild(fromRowLabel21)
  fromRowLabel21.appendChild(fromRowName21)
  fromRowLabel21.appendChild(formRowInput21)
  fromRowLabel21.appendChild(fromRowMessage21)

  forms.appendChild(formRow22)
  formRow22.appendChild(fromRowLabel22)
  fromRowLabel22.appendChild(fromRowName22)
  fromRowLabel22.appendChild(formRowInput22)
  fromRowLabel22.appendChild(fromRowMessage22)

  forms.appendChild(formRow23)
  formRow23.appendChild(fromRowLabel23)
  fromRowLabel23.appendChild(fromRowName23)
  fromRowLabel23.appendChild(formRowInput23)
  fromRowLabel23.appendChild(fromRowMessage23)


  forms.appendChild(formRow4)
  formRow4.appendChild(fromRowLabel4)
  fromRowLabel4.appendChild(fromRowName4)
  fromRowLabel4.appendChild(formRowInput4)
  fromRowLabel4.appendChild(fromRowMessage4)


  forms.appendChild(formRow5)
  formRow5.appendChild(fromRowLabel5)
  fromRowLabel5.appendChild(fromRowName5)
  fromRowLabel5.appendChild(fromRowMessage5)
  formRow5.appendChild(radioButtonDiv)
  radioButtonDiv.appendChild(radioButtonDivIner)
  radioButtonDivIner.appendChild(radioButtonDivLabel)
  radioButtonDivLabel.appendChild(radioButtonDivInput)
  radioButtonDivLabel.appendChild(radioButtonDivSpan)


  radioButtonDiv.appendChild(radioButtonDivIner2)
  radioButtonDivIner2.appendChild(radioButtonDivLabel2)
  radioButtonDivLabel2.appendChild(radioButtonDivInput2)
  radioButtonDivLabel2.appendChild(radioButtonDivSpan2)

  radioButtonDiv.appendChild(radioButtonDivIner3)
  radioButtonDivIner3.appendChild(radioButtonDivLabel3)
  radioButtonDivLabel3.appendChild(radioButtonDivInput3)
  radioButtonDivLabel3.appendChild(radioButtonDivSpan3)

  forms.appendChild(formRow6)
  formRow6.appendChild(formRowButton6)

  form1validation()
}

function switchForms(){
  // event listnters
  const monintor = document.querySelector('ul')
  monintor.addEventListener('click', doSomething)



  function doSomething(event){
    let option = event.target

    if(option.classList[0]==='class0'){
      for(let i=0;i<option.parentNode.parentNode.children.length;i++){
        option.parentNode.parentNode.children[i].children[0].classList.remove('active')
      }
      const active = document.querySelector('.class0')
      active.classList.add('active')
      basicForm()
    }else
    if(option.classList[0]==='class1'){
      // remove the active class
      for(let i=0;i<option.parentNode.parentNode.children.length;i++){
        option.parentNode.parentNode.children[i].children[0].classList.remove('active')}
        // clear the page of the previous forms
        if(document.querySelector('.main-content')!==null){
          const clear= document.querySelector('.main-content')
          clearElement(clear)
        }
        // set a new active class
        const active = document.querySelector('.class1')
        active.classList.add('active')
    }else  if(option.classList[0]==='class2'){
      // remove the active class
      for(let i=0;i<option.parentNode.parentNode.children.length;i++){
        option.parentNode.parentNode.children[i].children[0].classList.remove('active')  }
        // clear the page of the previous forms
        if(document.querySelector('.main-content')!==null){
          const clear= document.querySelector('.main-content')
          clearElement(clear)
        }
        // set a new active class
      const active = document.querySelector('.class2')
      active.classList.add('active')
    }else  if(option.classList[0]==='class3'){
      // remove the active class
      for(let i=0;i<option.parentNode.parentNode.children.length;i++){
        option.parentNode.parentNode.children[i].children[0].classList.remove('active')  }
        // clear the page of the previous forms
        if(document.querySelector('.main-content')!==null){
          const clear= document.querySelector('.main-content')
          clearElement(clear)
        }
        // set a new active class
      const active = document.querySelector('.class3')
      active.classList.add('active')
    }else   if(option.classList[0]==='class4'){
      // remove the active class
      for(let i=0;i<option.parentNode.parentNode.children.length;i++){
        option.parentNode.parentNode.children[i].children[0].classList.remove('active')  }
        // clear the page of the previous forms
        if(document.querySelector('.main-content')!==null){
          const clear= document.querySelector('.main-content')
          clearElement(clear)
        }
        // set a new active class
      const active = document.querySelector('.class4')
      active.classList.add('active')
    }
    if(option.classList[0]==='class5'){
      // remove the active class
      for(let i=0;i<option.parentNode.parentNode.children.length;i++){
        option.parentNode.parentNode.children[i].children[0].classList.remove('active')  }
        // clear the page of the previous forms
        if(document.querySelector('.main-content')!==null){
          const clear= document.querySelector('.main-content')
          clearElement(clear)
        }
        // set a new active class
      const active = document.querySelector('.class5')
      active.classList.add('active')


    }
    if(option.classList[0]==='class6'){
      // remove the active class
      for(let i=0;i<option.parentNode.parentNode.children.length;i++){
        option.parentNode.parentNode.children[i].children[0].classList.remove('active')  }
        // clear the page of the previous forms
        if(document.querySelector('.main-content')!==null){
          const clear= document.querySelector('.main-content')
          clearElement(clear)
        }
        // set a new active class
      const active = document.querySelector('.class6')
      active.classList.add('active')



    }
  }
}





function run(){
  pageLoading()
  switchForms()
}



run()
