let div = document.querySelector('div');
div.addEventListener('click', giveAlert);

function giveAlert(){
    alert('this is an alert');
}


let img = document.querySelector('img');
img.addEventListener('click', fullScreen);

function fullScreen(){
    document.body.style.backgroundColor = 'red';
    img.style.width = "50%"; 
    img.style.height = "50%"; 
}


let p = document.getElementById("p");
p.addEventListener('click', makeBold);

function makeBold(){
    p.style.fontWeight = "bold";
}
