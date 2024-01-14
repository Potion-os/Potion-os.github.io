// ABILITY TO DRAG AROUND
function attachPomodoroEventListeners(pomodoro) {
    const pomodoroHandle = pomodoro.querySelector('.pomodoroHandle');
    const closeButton = pomodoro.querySelector('.closeButtonPomo');
    let offsetX, offsetY;
  
    pomodoroHandle.addEventListener('mousedown', function (e) {
      e.preventDefault();
  
      offsetX = e.clientX - pomodoro.getBoundingClientRect().left;
      offsetY = e.clientY - pomodoro.getBoundingClientRect().top;
  
      document.addEventListener('mousemove', dragMove);
      document.addEventListener('mouseup', dragEnd);
  
      pomodoroHandle.style.cursor = 'grabbing';
    });
  
    // WHEN I CLICK IT CLOSES
    closeButton.addEventListener('click', function () {
      pomodoro.style.display = 'none';
    });
  
    function dragMove(e) {
      pomodoro.style.left = (e.clientX - offsetX) + 'px';
      pomodoro.style.top = (e.clientY - offsetY) + 'px';
    }
  
    function dragEnd() {
      document.removeEventListener('mousemove', dragMove);
      document.removeEventListener('mouseup', dragEnd);
  
      pomodoroHandle.style.cursor = 'grab';
    }
}

// drag
document.addEventListener('DOMContentLoaded', function () {
  const pomodoro = document.querySelector('.pomodoro');
  attachPomodoroEventListeners(pomodoro);
});


// actual pomodoro timing!

document.addEventListener('DOMContentLoaded', function () {
    const pomodoro = document.querySelector('.pomodoro');
    const sessionCountElement = document.getElementById('sessionCount');
    const pomoTimerElement = document.getElementById('pomoTimer');
    const upNextElement = document.getElementById('upNext');
    const nextButton = document.querySelector('.nextButton');
  
    let sessionCount = 1;
    let isPomodoro = true;
    let timerDuration = isPomodoro ? 25 * 60 : 5 * 60; // Initial timer duration in seconds
    let timerInterval;
  
    function startTimer() {
      timerInterval = setInterval(function () {
        const minutes = Math.floor(timerDuration / 60);
        const seconds = timerDuration % 60;
  
        pomoTimerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  
        if (timerDuration <= 0) {
          clearInterval(timerInterval);
          nextTimer(); // Move to the next timer when the current one finishes
        }
  
        timerDuration--;
      }, 1000);
    }
  
    function nextTimer() {
      isPomodoro = !isPomodoro;
      sessionCount++;
  
      if (isPomodoro) {
        timerDuration = 25 * 60;
        upNextElement.textContent = 'Lock in!';
      } else {
        timerDuration = 5 * 60;
        upNextElement.textContent = 'Break!';
      }
  
      sessionCountElement.textContent = sessionCount;
      startTimer();
    }
  
    nextButton.addEventListener('click', function () {
      clearInterval(timerInterval);
      nextTimer();
    });
  
    // Start the initial timer
    startTimer();
  });