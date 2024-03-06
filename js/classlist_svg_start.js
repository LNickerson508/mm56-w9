let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let sadface = document.querySelector('#sad');
let happyface = document.querySelector('#happy');
let cap = document.querySelector('#caption');
let captions = ['yipee!! you are a good friend.', 'actions have consequences. one day you will buckle under the weight of your sins. i will not be there to save you.'];

function showHappy() {
    sadface.classList.add('hidden');
    happyface.classList.remove('hidden');
    cap.textContent = captions[this.dataset.choice];
}

function showSad() {
    happyface.classList.add('hidden');
    sadface.classList.remove('hidden');
    cap.textContent = captions[this.dataset.choice];;
}


btn1.addEventListener('click', showHappy, false);
btn2.addEventListener('click', showSad, false);