document.addEventListener('DOMContentLoaded', function () {
    var superButton = document.getElementById('superButton');
    var offsetX, offsetY;
  

  // I GRAB!! AND IT MOVES!!!
    superButton.addEventListener('mousedown', function (e) {
      e.preventDefault();
  
      offsetX = e.clientX - superButton.getBoundingClientRect().left;
      offsetY = e.clientY - superButton.getBoundingClientRect().top;
  
      document.addEventListener('mousemove', dragMove);
      document.addEventListener('mouseup', dragEnd);
  
 
      superButton.style.cursor = 'grabbing';
    });


  // WHEN I CLICK IT SHOWS THE SETTINGS PAGE 
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