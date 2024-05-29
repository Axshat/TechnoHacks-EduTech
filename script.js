let countdown;
let isRunning = false;
let initialTime = 60 * 60; // Default initial time in seconds (1 hour)
let currentTime = initialTime;

function updateDisplay(time) {
    const hours = String(Math.floor(time / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    document.getElementById('time').innerText = `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        countdown = setInterval(() => {
            if (currentTime > 0) {
                currentTime--;
                updateDisplay(currentTime);
            } else {
                stopTimer();
                alert("Time's up!");
            }
        }, 1000);
    }
}

function stopTimer() {
    isRunning = false;
    clearInterval(countdown);
}

function resetTimer() {
    stopTimer();
    currentTime = 0;
    updateDisplay(currentTime);
}

function restartTimer() {
    resetTimer();
    startTimer();
}

function setTimer() {
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    initialTime = (hours * 3600) + (minutes * 60) + seconds;
    currentTime = initialTime;
    updateDisplay(currentTime);
}

updateDisplay(currentTime);
