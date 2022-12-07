var goal = ((Math.random() * 10) + 5).toFixed(2)
document.getElementById("num").innerHTML = "Stop the timer at " + goal + " seconds.";

const output = document.querySelector('.output');
let outputInt = 0; /* CHANGE STARTING NUMBER */
var timer;

const startButton = document.querySelector('.start-button').addEventListener('click', countRunner);
const stopButton = document.querySelector('.stop-button').addEventListener('click', stop);
const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);

var x = document.getElementById("time");

function countRunner(){
    time.style.display = "none";
    if(outputInt < 9999){
        timer = setInterval(count, 10); /* CHANGE THE SPEED OF THE TIMER */
    }  
}

function count(){
    if(outputInt < 9999){
        ++outputInt;
        output.textContent = zeros(outputInt);
    }
}

function zeros(x){
    var numString = x + "";
    if(numString.length == 1){
        return "0.0" + numString;
    }
    else if(numString.length == 2){
        return "0." + numString.charAt(0) + numString.charAt(1);
    }
    else if(numString.length == 3){
        return numString.charAt(0) + "." + numString.charAt(1) + numString.charAt(2);
    }
    else if(numString.length == 4){
        return numString.charAt(0) + numString.charAt(1) + "." + numString.charAt(2) + numString.charAt(3);
    }
}

function stop(){
    time.style.display = "block";
    clearInterval(timer);
    var diff = Math.abs((goal - (outputInt/100).toFixed(2)).toFixed(2));
    alert("You were " + diff + " seconds off.");
}