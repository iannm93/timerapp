var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

let zero = 0
let zeros = 00


function startTimer() {
  let totalSeconds = workMinutesInput.value.trim() * 60

  let minutesLeft = workMinutesInput.value.trim()
  let secondsLeft = 59;

  let timeIdentifier = setInterval(function () {
    totalSeconds--
    secondsLeft--
    secondsDisplay.textContent = secondsLeft
    minutesDisplay.textContent = minutesLeft
    console.log(totalSeconds)
    if (totalSeconds % 60 === 0) {
      minutesLeft--
    }
    if (secondsLeft === 0) {
      secondsLeft = 59
    } else if (totalSeconds === 0) {
      secondsDisplay.textContent = zeros
      minutesDisplay.textContent = zero
      clearInterval(timeIdentifier)
    }

  }, 1000)
}



playButton.addEventListener("click", startTimer);