const output = document.querySelector('.output');
let outputInt = 0; /* CHANGE STARTING NUMBER */
var timer;

const startButton = document.querySelector('.start-button').addEventListener('click', countRunner);
const stopButton = document.querySelector('.stop-button').addEventListener('click', stop);
const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);


function countRunner(){
    if(outputInt < 9999999999){
        timer = setInterval(count, 1000); /* CHANGE THE SPEED OF THE TIMER */
    }
}

function count(){
    if(outputInt < 9999999999){
        ++outputInt;
        output.textContent = zeros(outputInt);
    }
}

function zeros(x){
    var numString = x + "";
    if(numString.length == 1){
        return "(000) 000-000" + numString;
    }
    else if(numString.length == 2){
        return "(000) 000-00" + numString.charAt(0) + numString.charAt(1);
    }
    else if(numString.length == 3){
        return "(000) 000-0" + numString.charAt(0) + numString.charAt(1) + numString.charAt(2);
    }
    else if(numString.length == 4){
        return "(000) 000-" + numString.charAt(0) + numString.charAt(1) + numString.charAt(2) + numString.charAt(3);
    }
    else if(numString.length == 5){
        return "(000) 00" + numString.charAt(0) + "-" + numString.charAt(1) + numString.charAt(2) + numString.charAt(3) + numString.charAt(4);
    }
    else if(numString.length == 6){
        return "(000) 0" + numString.charAt(0) + numString.charAt(1) + "-" + numString.charAt(2) + numString.charAt(3) + numString.charAt(4) + numString.charAt(5);
    }
    else if(numString.length == 7){
        return "(000)" + " " + numString.charAt(0) + numString.charAt(1) + numString.charAt(2) + "-" + numString.charAt(3) + numString.charAt(4) + numString.charAt(5) + numString.charAt(6);
    }
    else if(numString.length == 8){
        return "(00" + numString.charAt(0) + ") " + numString.charAt(1) + numString.charAt(2) + numString.charAt(3) + "-" + numString.charAt(4) + numString.charAt(5) + numString.charAt(6) + numString.charAt(7);
    }
    else if(numString.length == 9){
        return "(0" + numString.charAt(0) + numString.charAt(1) + ") " + numString.charAt(2) + numString.charAt(3) + numString.charAt(4) + "-" + numString.charAt(5) + numString.charAt(6) + numString.charAt(7) + numString.charAt(8);
    }
    else{
        return "(" + numString.charAt(0) + numString.charAt(1) + numString.charAt(2) + ") " + numString.charAt(3) + numString.charAt(4) + numString.charAt(5) + "-" + numString.charAt(6) + numString.charAt(7) + numString.charAt(8)  + numString.charAt(9);
    }
}

function stop(){
    clearInterval(timer);
}

function reset(){
    output.textContent = "(000) 000-0000";
    outputInt = 0;
}

function submit(){
    alert(output.textContent);
}