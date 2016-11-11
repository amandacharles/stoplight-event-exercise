/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/



const redLightDiv = document.getElementById("stopLight");
const yellowLightDiv = document.getElementById('slowLight');
const greenLightDiv = document.getElementById('goLight');

// RED LIGHT ******************

const redLightButton = document.querySelector('#stopButton');

redLightButton.addEventListener('click', () => {
// toggle red bulbs on/off
 redLightDiv.classList.toggle('bulb');
 redLightDiv.classList.toggle('redBulb');

if (yellowLightDiv.classList.contains('yellowBulb')) {

  yellowLightDiv.classList.toggle('bulb');
  yellowLightDiv.classList.toggle('yellowBulb');
}
if (greenLightDiv.classList.contains('greenBulb')) {
   greenLightDiv.classList.toggle('bulb');
   greenLightDiv.classList.toggle('greenBulb');
} {
}
})

// YELLOW LIGHT ********************
const yellowLightButton = document.querySelector('#slowButton');

yellowLightButton.addEventListener('click', () => {

  yellowLightDiv.classList.toggle('bulb');
  yellowLightDiv.classList.toggle('yellowBulb');

  if (redLightDiv.classList.contains('redBulb')) {
    redLightDiv.classList.toggle('bulb');
    redLightDiv.classList.toggle('redBulb');
  }
  if (greenLightDiv.classList.contains('greenBulb')) {
     greenLightDiv.classList.toggle('bulb');
     greenLightDiv.classList.toggle('greenBulb');
  } 

})

// GREEN LIGHT ***********************

const greenLightButton = document.querySelector('#goButton');

greenLightButton.addEventListener('click', () => {

  greenLightDiv.classList.toggle('bulb');
  greenLightDiv.classList.toggle('greenBulb');

  if (yellowLightDiv.classList.contains('yellowBulb')) {

    yellowLightDiv.classList.toggle('bulb');
    yellowLightDiv.classList.toggle('yellowBulb');
  }
  if (redLightDiv.classList.contains('redBulb')) {

    redLightDiv.classList.toggle('bulb');
    redLightDiv.classList.toggle('redBulb');
  }

})
