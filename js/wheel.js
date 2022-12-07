(function() {
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.spin');

    const body = document.querySelector('body');
    const nav = document.querySelector('nav');

    let deg = 0;
    let zoneSize = 45; // deg

      // Counter clockwise
    const symbolSegments = {
        1: "Close",
        2: "Advice",
        3: "RPS",
        4: "Video",
        5: "Hampster",
        6: "Timer",
        7: "Dragon",
        8: "Snowman",
    }

    const handleWin = (actualDeg) => {
        const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
        
        const sleep = async (milliseconds) => {
            await new Promise(resolve => {
                return setTimeout(resolve, milliseconds)
            });
        };

        if(winningSymbolNr == 1){

            const close = async () => {
                await sleep(500);
                window.opener=null;
                window.open('','_self');
                window.close();
                window.history.go(-1);
                $(document.body).hide()
            }

            close();
        }
        if(winningSymbolNr == 2){
            const endpoint = 'https://api.adviceslip.com/advice';

            async function getQuote(){
                let text = await fetch(endpoint);
                let response = await text.text();

                let json_response = JSON.parse(response);
                alert(json_response.slip.advice);
            }

            getQuote();
        }
        if(winningSymbolNr == 3){
            var options =['Rock', 'Paper', 'Scissors'];
            var choice = options[Math.floor(Math.random()*options.length)];

            var answer = prompt("Rock, Paper, or Scissors?");
            answer = answer.toLowerCase();

            if(answer == 'rock'){
                if(choice == 'Rock'){
                    alert("We tied :|");
                }
                else if(choice == 'Paper'){
                    alert("I win :D");
                }
                else{
                    alert("You win >:(");
                }
            }

            else if(answer == 'paper'){
                if(choice == 'Rock'){
                    alert("You win >:(");
                }
                else if(choice == 'Paper'){
                    alert("We tied :|");
                }
                else{
                    alert("I win :D");
                }
            }

            else if(answer == 'scissors'){
                if(choice == 'Rock'){
                    alert("I win :D");
                }
                else if(choice == 'Paper'){
                    alert("You win >:(");
                }
                else{
                    alert("We tied :|");
                }
            }

            else{
                alert("That wasn't an option...so I guess I win :/");
            }
            
        }
        if(winningSymbolNr == 4){
            window.open("https://youtu.be/9YyTZwFEdGY", "_blank");
        }
        if(winningSymbolNr == 5){
            const reveal = async () =>{
                var audio = new Audio('scream.mp3');
                audio.play();
                var hampster = document.getElementById("hide");
                hampster.style.visibility = 'visible';
                await sleep(500);
                hampster.style.visibility = 'hidden';
            }

            reveal();
        }
        if(winningSymbolNr == 6){
            window.open("timer.html", "_blank");
        }
        if(winningSymbolNr == 7){
            alert("hi");
        }
        if(winningSymbolNr == 8){
            alert("hi");
        }
    }
  
    startButton.addEventListener('click', () => {

        // Disable button during spin
      startButton.style.pointerEvents = 'none';
      // Calculate a new rotation between 5000 and 10 000
      deg = Math.floor(5000 + Math.random() * 5000);
      // Set the transition on the wheel
      wheel.style.transition = 'all 1s ease-out';
      // Rotate the wheel
      wheel.style.transform = `rotate(${deg}deg)`;
      // Apply the blur
      wheel.classList.add('blur');
    });
  
    wheel.addEventListener('transitionend', () => {
      // Remove blur
      wheel.classList.remove('blur');
      // Enable button when spin is over
      startButton.style.pointerEvents = 'auto';
      // Need to set transition to none as we want to rotate instantly
      wheel.style.transition = 'none';
      // Calculate degree on a 360 degree basis to get the "natural" real rotation
      // Important because we want to start the next spin from that one
      // Use modulus to get the rest value from 360
      const actualDeg = deg % 360;
      // Set the real rotation instantly without animation
      wheel.style.transform = `rotate(${actualDeg}deg)`;
      // Calculate and display the winning symbol
      handleWin(actualDeg);

    });
  })();