document.addEventListener('DOMContentLoaded', function () {
    var stickyButton = document.getElementById('stickyButton');
    var offsetX, offsetY;
    stickyButton.style.cursor = 'default';
  

  // I GRAB!! AND IT MOVES!!!
    stickyButton.addEventListener('mousedown', function (e) {
      e.preventDefault();
  
      offsetX = e.clientX - stickyButton.getBoundingClientRect().left;
      offsetY = e.clientY - stickyButton.getBoundingClientRect().top;
  
      document.addEventListener('mousemove', dragMove);
      document.addEventListener('mouseup', dragEnd);
  
 
      stickyButton.style.cursor = 'grabbing';
    });


// add a function when pressed creates new sticky note


    function dragMove(e) {
      stickyButton.style.left = (e.clientX - offsetX) + 'px';
      stickyButton.style.top = (e.clientY - offsetY) + 'px';
    }
  // stay 
    function dragEnd() {
      document.removeEventListener('mousemove', dragMove);
      document.removeEventListener('mouseup', dragEnd);
  
    
      stickyButton.style.cursor = 'pointer';
    }

  });  