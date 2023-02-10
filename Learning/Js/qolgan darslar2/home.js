// const heading = document.getElementById('heading');
// heading.textContent = 'something else'

// const heading = document.getElementsByClassName('heading');
// heading[0].textContent = 'something else'

// const paragraph = document.getElementById('heading');
// paragraph.innerHTML = "<h1>la la la</h1>"

// const InputEl = document.getElementsByName('InputEl');
// InputEl.value = 1;

// const InputEl = document.getElementById('InputEl');
// InputEl.value = 25;

// const paragraph = document.createElement('p');
// console.log(paragraph);
// const text = document.createTextNode("Something else")
// paragraph.appendChild(text)

// const box = document.getElementById('box');
// box.appendChild(paragraph)
// console.log(paragraph);

// console.log(box.parentElement);
// console.log(box.children);

// box.remove()

// const changeText = () => {
    // const heading = document.getElementById('heading');
    // heading.textContent = "Sarlavha o'zgarishi amalga oshirildi";
// }

const textChange = () => {
    const heading = document.getElementById('heading');
    heading.textContent = 'Yangi sarlavha'
}

const btn = document.getElementById('changeText');
btn.addEventListener('click', textChange)