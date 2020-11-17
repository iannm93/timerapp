let statusSpan = document.querySelector("#status");
let statusToggle = document.querySelector("#status-toggle");
let playButton = document.querySelector("#play");
let pauseButton = document.querySelector("#pause");
let stopButton = document.querySelector("#stop");
let minutesDisplay = document.querySelector("#minutes");
let secondsDisplay = document.querySelector("#seconds");
let workMinutesInput = document.querySelector("#work-minutes");
let breakInput = document.querySelector("#break");
let timeIdentifer;

let timeUntilBreak = 0
let secondsLeft = 59

let minutesLeft = workMinutesInput.value.trim();

function renderTime() {
  minutesDisplay.textContent = workMinutesInput.value
  secondsDisplay.textContent = secondsLeft
}

function startTimer() {
  let totalSeconds = workMinutesInput.value.trim() * 60
  console.log(totalSeconds)
  renderTime();

  console.log(breakInput.value)
  console.log(workMinutesInput.value)

  timeIdentifer = setInterval(() => {

    timeUntilBreak++
    totalSeconds--
    secondsLeft--
    secondsDisplay.textContent = secondsLeft
    minutesDisplay.textContent = workMinutesInput.value
    console.log(totalSeconds)

    if (timeUntilBreak === breakInput.value * 60) {
      alert("time for a break")
      clearInterval(timeIdentifer)
    }
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