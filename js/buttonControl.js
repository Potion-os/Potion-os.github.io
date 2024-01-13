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

//sticky button
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


document.addEventListener('DOMContentLoaded', function () {
  const stickyButton = document.getElementById('stickyButton');
  var offsetX, offsetY;
  stickyButton.style.cursor = 'default';

  stickyButton.addEventListener('mousedown', function (e) {
      e.preventDefault();

      createStickyNote();

      var stickyNote = document.getElementById('stickyNote');
      var stickyNoteHandle = document.getElementById('stickyNoteHandle');

      var buttonRect = stickyButton.getBoundingClientRect();
      offsetX = e.clientX - buttonRect.left;
      offsetY = e.clientY - buttonRect.top;

      document.addEventListener('mousemove', dragMove);
      document.addEventListener('mouseup', dragEnd);

      stickyButton.style.cursor = 'grabbing';
  });

  });
// add sticky note

function getRandomColor() {
  const randomColorIndex = Math.floor(Math.random() * 4) + 1;
  return `var(--color${randomColorIndex})`;
}



document.getElementById('stickyButton').addEventListener('click', function () {
  // Create a new div element
  var newStickyNote = document.createElement('div');
  newStickyNote.classList.add('stickyNote');

  // Generate random initial position within the screen
  const randomTop = Math.random() * (window.innerHeight - 200); // Adjust 200 based on your sticky note height
  const randomLeft = Math.random() * (window.innerWidth - 200); // Adjust 200 based on your sticky note width

  newStickyNote.style.top = `${randomTop}px`;
  newStickyNote.style.left = `${randomLeft}px`;
  newStickyNote.style.backgroundColor = getRandomColor();
  newStickyNote.innerHTML = `
      <div class="stickyNoteHandle"></div>
      <div class="content" contenteditable="true" oninput="renderContent()">Type note here...</div>
      <button class="closeButtonPost">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.719357 1.12146C1.37023 0.470582 2.42551 0.470582 3.07638 1.12146L11.8979 9.94295L20.7194 1.12146C21.3702 0.470582 22.4255 0.470582 23.0764 1.12146C23.7273 1.77233 23.7273 2.8276 23.0764 3.47848L14.2549 12.3L23.0764 21.1215C23.7273 21.7723 23.7273 22.8276 23.0764 23.4785C22.4255 24.1294 21.3702 24.1294 20.7194 23.4785L11.8979 14.657L3.07638 23.4785C2.42551 24.1294 1.37023 24.1294 0.719357 23.4785C0.0684827 22.8276 0.0684827 21.7723 0.719357 21.1215L9.54085 12.3L0.719357 3.47848C0.0684827 2.8276 0.0684827 1.77233 0.719357 1.12146Z"/>
          </svg>
      </button>
  `;

  // Append the new sticky note to the document body or a specific container
  document.body.appendChild(newStickyNote);

  // Attach event listeners to the new sticky note
  attachStickyNoteEventListeners(newStickyNote);
});

// Function to attach event listeners to a sticky note
function attachStickyNoteEventListeners(stickyNote) {
  const stickyNoteHandle = stickyNote.querySelector('.stickyNoteHandle');
  const closeButton = stickyNote.querySelector('.closeButtonPost');
  let offsetX, offsetY;

  stickyNoteHandle.addEventListener('mousedown', function (e) {
    e.preventDefault();

    offsetX = e.clientX - stickyNote.getBoundingClientRect().left;
    offsetY = e.clientY - stickyNote.getBoundingClientRect().top;

    document.addEventListener('mousemove', dragMove);
    document.addEventListener('mouseup', dragEnd);

    stickyNoteHandle.style.cursor = 'grabbing';
  });

  // WHEN I CLICK IT CLOSES
  closeButton.addEventListener('click', function () {
    stickyNote.style.display = 'none';
  });

  function dragMove(e) {
    stickyNote.style.left = (e.clientX - offsetX) + 'px';
    stickyNote.style.top = (e.clientY - offsetY) + 'px';
  }

  function dragEnd() {
    document.removeEventListener('mousemove', dragMove);
    document.removeEventListener('mouseup', dragEnd);

    stickyNoteHandle.style.cursor = 'grab';
  }
}

