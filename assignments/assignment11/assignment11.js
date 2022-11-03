window.addEventListener('load', getQuote);

const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.adviceslip.com/advice';

const images = 'https://picsum.photos/200';

console.log(img);

async function getQuote(){
    let text = await fetch(endpoint);
    let response = await text.text();

    let json_response = JSON.parse(response);
    console.log(json_response.slip.advice);

    displayQuote(json_response.slip.advice);

    //document.write(img);
    addTheImage();
}

function displayQuote(x) {
    document.getElementById('js-quote-text').textContent = x;
}

function addTheImage() {
    var img = document.createElement('img');
    img.src = images;
    document.body.appendChild(img);
}