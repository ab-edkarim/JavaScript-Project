// Variables to store timer state and interval
let intervalId;
let running = false;

// Function to update the timer display
function updateTimerDisplay(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  const displayTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  document.getElementById('timer').textContent = displayTime;
}

// Function to start the countdown
function startCountdown() {
  const minutesInput = parseInt(document.getElementById('minutes').value);
  if (isNaN(minutesInput) || minutesInput < 1) {
    alert('Please enter a valid number of minutes.');
    return;
  }

  let seconds = minutesInput * 60;

  // Update the display immediately
  updateTimerDisplay(seconds);

  intervalId = setInterval(function () {
    if (seconds > 0) {
      seconds--;
      updateTimerDisplay(seconds);
    } else {
      stopCountdown();
      alert('Time is up! You are now more productive.');
    }
  }, 1000);

  // Disable the input and start button
  document.getElementById('minutes').disabled = true;
  document.getElementById('startButton').disabled = true;
  document.getElementById('stopButton').disabled = false;
  running = true;
}

// Function to stop the countdown
function stopCountdown() {
  clearInterval(intervalId);

  // Re-enable the input and start button
  document.getElementById('minutes').disabled = false;
  document.getElementById('startButton').disabled = false;
  document.getElementById('stopButton').disabled = true;
  running = false;
}

// Event listeners
document.getElementById('startButton').addEventListener('click', function () {
  if (!running) {
    startCountdown();
  }
});

document.getElementById('stopButton').addEventListener('click', function () {
  if (running) {
    stopCountdown();
  }
});
