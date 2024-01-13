// settings button
document.addEventListener('DOMContentLoaded', function () {
  var superButton = document.getElementById('superButton');
  var offsetX, offsetY;
  superButton.style.cursor = 'default';


// I GRAB!! AND IT MOVES!!!
  superButton.addEventListener('mousedown', function (e) {
    e.preventDefault();

    offsetX = e.clientX - superButton.getBoundingClientRect().left;
    offsetY = e.clientY - superButton.getBoundingClientRect().top;

    document.addEventListener('mousemove', dragMove);
    document.addEventListener('mouseup', dragEnd);


    superButton.style.cursor = 'grabbing';
  });


// WHEN I CLICK IT OPENS THE SETTINGS PAGE 
  superButton.addEventListener('dblclick', function () {

    var otherDiv = document.getElementById('settings');
    settings.style.display = settings.style.display === 'none' ? 'block' : 'none';
  });

// WHEN I CLICK IT CLOSES
var settingClose = document.getElementById('closeButton');
settingClose.addEventListener('click', function () {
  settings.style.display = 'none';
});

  function dragMove(e) {
    superButton.style.left = (e.clientX - offsetX) + 'px';
    superButton.style.top = (e.clientY - offsetY) + 'px';
  }
// stay 
  function dragEnd() {
    document.removeEventListener('mousemove', dragMove);
    document.removeEventListener('mouseup', dragEnd);

  
    superButton.style.cursor = 'pointer';
  }

});  


// timer button
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

// s  ticky button
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