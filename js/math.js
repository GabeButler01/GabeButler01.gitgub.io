var num1 = Math.floor((Math.random() * 100)) + 40;
var num2 = Math.floor(Math.random() * 100) + 40;
var num3 = Math.floor(Math.random() * 100) + 40;

document.getElementById("problem").innerHTML = num1 + " + " + num2 + " + " + num3;

var answer = num1 + num2 + num3;

let outputInt = 0;
var timer;

var submit = document.getElementById("math");
function noRefresh(event) {event.preventDefault();}
submit.addEventListener('submit', noRefresh);

function timer(){
    if(outputInt < 12){
        timer = setInterval(count, 1000);
    }
    else{
        return;
    }     
}

function count(){
    if(outputInt < 12){
        ++outputInt;
    }
    if(outputInt >= 12){
        if(document.getElementById("answer").disabled == false){
            alert("You ran out of time!");
            document.getElementById("answer").disabled = true;
            document.getElementById("submit").disabled = true;
        }
        ++outputInt;
        return;
    }
}

function check(){
    var response = document.getElementById("answer").value;
    document.getElementById("answer").disabled = true;
    document.getElementById("submit").disabled = true;
    if(answer == response){
        if(outputInt <= 6){
            alert("Good job. You know how to copy and paste into Google.")
        }
        else{
            alert("Correct!");
        }
    }
    else{
        alert("No! The correct answer is " + answer);
    }
}