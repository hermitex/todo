const body = document.body
//remove element
const div = document.querySelector('div')
const spanHi = document.querySelector('#hi')
const spanBye = document.querySelector('#bye')

//console.log(spanHi.getAttribute('title'))
//changes the id to Mark Hallam
//console.log(spanHi.setAttribute('id', 'Mark Hallam'))
//console.log(spanHi.setAttribute('title', 'Mark Hallam'))

//spanHi.id = "Mark Hallam" //update the id this way too
//spanHi.removeAttribute("title")
//spanHi.removeAttribute("id")
//spanBye.remove()
//div.append(spanBye)
//div.removeChild(spanHi) //better to just use remove mostly
//console.log(spanHi.dataset)
//console.log(spanHi.dataset.test)
//add data
//spanHi.dataset.newName = "hi"
//add a new class:
//spanHi.classList.add("new-class")
//remove the element
//spanHi.classList.remove("hi1")
//automatically add or remove this class depending on the boolean
//spanHi.classList.toggle("hi3", false)
//spanHi.style.backgroundColor = "red"


//const div = document.createElement('div')
//innerText displays as no formatting
//div.innerText = 'Hello Mark' //add text inside div
//shows the text as it would be formatted with html
//div.textContent = "Hello world 2"
//div.textContent = "<strong>Hello world 2</strong>"
//security issue here:
//div.innerHTML = "<strong>Hello world 2</strong>"
//instead use this for security:
/* const strong = document.createElement('strong')
strong.innerText = "Hello world 2"
div.append(strong) */

//body.append(div) //crucial to add it to the page

//****body.append("Hello World", " Bye");
//append is better as it can take multiple input
//will show error as needs node:
//body.appendChild("hello world") ****//

