(function() {
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.spin');

    const body = document.querySelector('body');
    var nav = document.getElementById('nav');

    let deg = 0;
    let zoneSize = 45; // deg

    let audio;

      // Counter clockwise
    const symbolSegments = {
        1: "Close",
        2: "Advice",
        3: "RPS",
        4: "Video",
        5: "Hampster",
        6: "Timer",
        7: "Math",
        8: "Colors",
    }

    const handleWin = (actualDeg) => {
        const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
        
        const sleep = async (milliseconds) => {
            await new Promise(resolve => {
                return setTimeout(resolve, milliseconds)
            });
        };

        var isMobile = false;
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
            navigator.userAgent
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            navigator.userAgent.substr(0, 4)
          )
        ) {
          isMobile = true;
        }

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
            if (isMobile) {
                window.location.assign("https://youtu.be/9YyTZwFEdGY");
                } else {
            window.open("https://youtu.be/9YyTZwFEdGY", "_blank");
            
            }
        }
        if(winningSymbolNr == 5){
            const reveal = async () =>{
                audio.src = ('img/scream.mp3');
                audio.play();
                var hampster = document.getElementById("hide");
                hampster.style.visibility = 'visible';
                await sleep(1000);
                hampster.style.visibility = 'hidden';
            }
    
            reveal();
        }
        if(winningSymbolNr == 6){
            if (isMobile) {
                window.location.assign("timer.html");
                } else {
            window.open("timer.html", "_blank");
            
            }
        }
        if(winningSymbolNr == 7){
            if (isMobile) {
                window.location.assign("math.html");
                } else {
            window.open("math.html", "_blank");
            
            }
        }
        if(winningSymbolNr == 8){
            const change = async () => {
                startButton.style.pointerEvents = 'none';
                body.style.background = '#f76d6d';
                nav.style.background = '#f76d6d';
                body.style.transition = '1s';
                nav.style.transition = '1s';
                await sleep(1000);
                body.style.background = '#374785';
                nav.style.background = '#374785';
                body.style.transition = '1s';
                nav.style.transition = '1s';
                await sleep(1000);
                body.style.background = '#f7e9a0';
                nav.style.background = '#f7e9a0';
                body.style.transition = '1s';
                nav.style.transition = '1s';
                await sleep(1000);
                body.style.background = '#a8d1e7';
                nav.style.background = '#a8d1e7';
                body.style.transition = '1s';
                nav.style.transition = '1s';
                startButton.style.pointerEvents = 'auto';
            }
    
            change();
        }
    }
  
    startButton.addEventListener('click', () => {
        audio = new Audio();
        audio.autoplay = true;
        audio.src = "data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";

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