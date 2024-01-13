document.addEventListener('DOMContentLoaded', function () {
  var superButton = document.getElementById('superButton');
  var offsetX, offsetY;
  superButton.style.cursor = 'default';

  superButton.addEventListener('mousedown', function (e) {
      e.preventDefault();

      var buttonRect = superButton.getBoundingClientRect();
      offsetX = e.clientX - buttonRect.left;
      offsetY = e.clientY - buttonRect.top;

      document.addEventListener('mousemove', dragMove);
      document.addEventListener('mouseup', dragEnd);

      superButton.style.cursor = 'grabbing';
  });

  function dragMove(e) {
    superButton.style.left = (e.clientX - offsetX) + 'px';
    superButton.style.top = (e.clientY - offsetY) + 'px';
  }

  function dragEnd() {
      document.removeEventListener('mousemove', dragMove);
      document.removeEventListener('mouseup', dragEnd);

      superButton.style.cursor = 'pointer';
  }
});

  // WHEN I CLICK IT OPENS THE SETTINGS PAGE 
  superButton.addEventListener('dblclick', function () {
    var settings = document.getElementById('settings');
    settings.style.display = settings.style.display === 'none' ? 'block' : 'none';
  });

  // WHEN I CLICK IT CLOSES
  var settingClose = document.getElementById('closeButton');
  settingClose.addEventListener('click', function () {
    var settings = document.getElementById('settings');
    settings.style.display = 'none';
  });



// timer button
document.addEventListener('DOMContentLoaded', function () {
  var timerButton = document.getElementById('timerButton');
  var offsetX, offsetY;
  timerButton.style.cursor = 'default';

  timerButton.addEventListener('mousedown', function (e) {
      e.preventDefault();

      var buttonRect = timerButton.getBoundingClientRect();
      offsetX = e.clientX - buttonRect.left;
      offsetY = e.clientY - buttonRect.top;

      document.addEventListener('mousemove', dragMove);
      document.addEventListener('mouseup', dragEnd);

      timerButton.style.cursor = 'grabbing';
  });

  function dragMove(e) {
      timerButton.style.left = (e.clientX - offsetX) + 'px';
      timerButton.style.top = (e.clientY - offsetY) + 'px';
  }

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

  stickyButton.addEventListener('mousedown', function (e) {
      e.preventDefault();

      var buttonRect = stickyButton.getBoundingClientRect();
      offsetX = e.clientX - buttonRect.left;
      offsetY = e.clientY - buttonRect.top;

      document.addEventListener('mousemove', dragMove);
      document.addEventListener('mouseup', dragEnd);

      stickyButton.style.cursor = 'grabbing';
  });

  function dragMove(e) {
    stickyButton.style.left = (e.clientX - offsetX) + 'px';
    stickyButton.style.top = (e.clientY - offsetY) + 'px';
  }

  function dragEnd() {
      document.removeEventListener('mousemove', dragMove);
      document.removeEventListener('mouseup', dragEnd);

      stickyButton.style.cursor = 'pointer';
  }
});
 