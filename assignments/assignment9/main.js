const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgs = ['pic1.png', 'pic2.png', 'pic3.png', 'pic4.png', 'pic5.png'];

/* Declaring the alternative text for each image file */
const alts = {
    'pic1.png' : 'A circle on a white page with a gray trail. The word \'movement\' in the bottom right corner',
    'pic2.png' : 'An apple hidden in shadows with red liquid running down its mouth',
    'pic3.png' : 'A bowl of apples',
    'pic4.png' : 'Two planets floating in space',
    'pic5.png' : 'Many colorful sparks flying around the image'
}

/* Looping through images */
for(const x of imgs){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${x}`);
    newImage.setAttribute('alt', alts[x]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', event => {
        displayedImage.src = event.target.src;
        displayedImage.alt = event.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', event => {
    const btnClass = btn.getAttribute('class');
    if(btnClass === 'dark'){
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else{
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});