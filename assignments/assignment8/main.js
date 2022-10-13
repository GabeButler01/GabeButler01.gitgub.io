const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "Bob was shocked to see it was 94 fahrenheit during winter and marched straight to :insertx: to find some answers. After knocking on the :inserty: that weighs 300 pounds, :insertz: came outside to explain. \"We here at :insertx: decided it would be super funny if we caused flash floods by melting all the snow in the world all at once.\" Before being able to ask any follow-up questions, Bob was washed away.";
let insertX = ["the Team 10 House", "the Facebook Headquarters", "Hell"];
let insertY = ["door", "gates", "secretary's head"];
let insertZ = ["Kanye", "Andrew Tate", "Gabbie Hanna"];

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Bob', name);
        newStory = newStory.replace('Bob', name);
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300/14) + ' stone';
        const temperature =  Math.round((94-32)*(5/9)) + ' centigrade';
        newStory = newStory.replace('300 pounds', weight);
        newStory = newStory.replace('94 fahrenheit', temperature);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';

    
}