const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");


/* CALLBACK HELL */

/* function animateAll(number, callback){
    const animation = number.animate(aliceTumbling, aliceTiming);
    animation.finished
        .then(callback);
}

function animate(){
    animateAll(alice1, () => {
        animateAll(alice2, () => {
            animateAll(alice3, () => {
            });
        });
    });
} */





/* PROMISE CHAIN */

/* const animate = alice1.animate(aliceTumbling, aliceTiming).finished;

animate
    .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
    .then(() => alice3.animate(aliceTumbling, aliceTiming).finished) */






/* ASYNC & AWAIT */

async function animate(){
    const alices = [alice1, alice2, alice3];
    for (const alice of alices){
        await alice.animate(aliceTumbling, aliceTiming).finished;
    }
}




animate();
