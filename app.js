let database  ={
  page_title:'Basic Form',
  header_title:'Welcome to the form generation and manupulation using javascript',
  download_button:'Download'


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
