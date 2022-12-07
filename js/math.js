var num1 = Math.floor((Math.random() * 100));
var num2 = Math.floor(Math.random() * 100);

document.getElementById("problem").innerHTML = num1 + " + " + num2;

var answer = num1 + num2;
var option1 = answer - Math.floor((Math.random() * 10));
var option2 = answer + Math.floor((Math.random() * 15));
var option3 = answer - Math.floor((Math.random() * 8));

var choices = [answer, option1, option2, option3];


document.getElementById("1").innerHTML = answer + "hi";