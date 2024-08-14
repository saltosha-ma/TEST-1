//1.
const containsOnlyDigits = (str) => {
   const regExp = /^\d+$/
   return regExp.test(str)
 }
 
 console.log(containsOnlyDigits("12345"))
 console.log(containsOnlyDigits("12a45"))



 //2.
 function printMessage() {
   let seconds = 0
   setInterval(() => {
       seconds++
       console.log('Прошла секунда:', {seconds})
   }, 1000)
}

printMessage()


//3.
const count = () => {
   let i = 1;
   const interval = setInterval(() => {
       console.log(i);
       i++;
       if (i > 10) {
           clearInterval(interval);
       }
   }, 1000);
}

count();


//4.
const toggleBackground = () => {
   const block = document.getElementById('block');

   block.addEventListener('click', () => {
       if (block.style.backgroundColor === '') {
           block.style.backgroundColor = 'blue';
       } else {
           block.style.backgroundColor = '';
       }
   });
};

document.addEventListener('DOMContentLoaded', toggleBackground);

// 5.

const button = document.querySelector('.btn')

button.onclick = () => {
   const request = new XMLHttpRequest() 
   request.open('GET', 'data.json') 
   request.setRequestHeader('Сontent-type', 'application/json')
   request.send() 
} 