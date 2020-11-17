var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

let timeIdentifer;





let minutesLeft = workMinutesInput.value.trim();
let secondsLeft = 59

function renderTime(){
  minutesDisplay.textContent = workMinutesInput.value
  secondsDisplay.textContent = secondsLeft
}

function startTimer() {
  let totalSeconds = workMinutesInput.value.trim() * 60
  console.log(totalSeconds)
renderTime()




  timeIdentifer = setInterval(() => {

    totalSeconds--
    secondsLeft--
    secondsDisplay.textContent = secondsLeft
    minutesDisplay.textContent = workMinutesInput.value
    console.log(totalSeconds)

    if (totalSeconds % 60 === 0) {
      workMinutesInput.value--
    }
    if (secondsLeft === 0) {
      secondsLeft = 59
    } else if (totalSeconds === 0) {
      secondsDisplay.textContent = "00"
      minutesDisplay.textContent = "0"
      clearInterval(timeIdentifer)
    }

  }, 150)

}

function pauseTimer() {
  clearInterval(timeIdentifer)

}

function stopTimer() {
  clearInterval(timeIdentifer)
  minutesDisplay.textContent = "0"
  secondsDisplay.textContent = "00"
}
playButton.addEventListener("click", startTimer);

stopButton.addEventListener("click", stopTimer)

pauseButton.addEventListener("click", pauseTimer);