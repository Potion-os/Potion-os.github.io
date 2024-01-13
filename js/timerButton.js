document.addEventListener('DOMContentLoaded', function () {
    var timerButton = document.getElementById('timerButton');
    var offsetX, offsetY;
    timerButton.style.cursor = 'default';
  

  // I GRAB!! AND IT MOVES!!!
    timerButton.addEventListener('mousedown', function (e) {
      e.preventDefault();
  
      offsetX = e.clientX - timerButton.getBoundingClientRect().left;
      offsetY = e.clientY - timerButton.getBoundingClientRect().top;
  
      document.addEventListener('mousemove', dragMove);
      document.addEventListener('mouseup', dragEnd);
  
 
      timerButton.style.cursor = 'grabbing';
    });


// create function when pressed pomodoro timer interface opens


    function dragMove(e) {
      timerButton.style.left = (e.clientX - offsetX) + 'px';
      timerButton.style.top = (e.clientY - offsetY) + 'px';
    }
  // stay 
    function dragEnd() {
      document.removeEventListener('mousemove', dragMove);
      document.removeEventListener('mouseup', dragEnd);
  
    
      timerButton.style.cursor = 'pointer';
    }

  });  