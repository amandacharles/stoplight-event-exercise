/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/


// RED LIGHT ******************

const redLightButton = document.querySelector('#stopButton');

redLightButton.addEventListener('click', () => {
const redLightDiv = document.getElementById("stopLight");
redLightDiv.className = "redBulb";
})

// YELLOW LIGHT ********************
const yellowLightButton = document.querySelector('#slowButton');

yellowLightButton.addEventListener('click', () => {
const yellowLightDiv = document.getElementById('slowLight');
yellowLightDiv.className = "yellowBulb";
})

// GREEN LIGHT ***********************

const greenLightButton = document.querySelector('#goButton');

greenLightButton.addEventListener('click', () => {
  const greenLightDiv = document.getElementById('goLight');
  greenLightDiv.className = "greenBulb";
})
