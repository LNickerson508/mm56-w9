var startbtn = document.querySelector('#start');
var stopbtn = document.querySelector('#stop');
var mytext = document.querySelector('.text');

console.log(mytext.classList);

function startAnim () {
    mytext.classList.add('animate');
   // mytext.style.color = "red";
    console.log(mytext.classList);
}

function stopAnim () {
    mytext.classList.remove('animate');
   // mytext.style.color = "black";
    console.log(mytext.classList);
}

startbtn.addEventListener('click', startAnim, false);
stopbtn.addEventListener('click', stopAnim, false);