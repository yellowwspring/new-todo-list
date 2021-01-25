const form = document.querySelector('form');
form.addEventListener('submit', changeText);

let counter = 0;

function changeText(event) {
    event.preventDefault();
    let button = form.children[1];
    button.innerText = counter;
    counter++;
}

