window.addEventListener('load', addTheImage);
window.addEventListener('load', getQuote);

const quoteButton = document.querySelector('.new-quote');


quoteButton.addEventListener('click', addTheImage);
quoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.adviceslip.com/advice';

console.log(img);

async function getQuote(){
    let text = await fetch(endpoint);
    let response = await text.text();

    let json_response = JSON.parse(response);
    console.log(json_response.slip.advice);

    displayQuote(json_response.slip.advice);
}

function displayQuote(x) {
    document.getElementById('js-quote-text').textContent = x;
}

function refresh() {
    document.body.removeChild(img);
}

function addTheImage() {
    var images = 'https://picsum.photos/200/300?random=';
    var random = Math.floor(Math.random() * 9999).toString();
    images = images + random;

    console.log(images);

    var img = document.createElement('img');
    img.src = images;
    document.body.appendChild(img);
}
