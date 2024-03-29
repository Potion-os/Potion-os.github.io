document.addEventListener('DOMContentLoaded', function () {
  const stickyNote = document.getElementById('stickyNote');
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
});

// markdown and latex renderer
function renderContent() {
  const contentDiv = document.querySelector('.content');
  const contentText = contentDiv.innerText;

  // Check if the content includes LaTeX commands
  if (contentText.includes('$')) {
    // Process LaTeX using MathJax
    MathJax.typesetClear([contentDiv]);
    MathJax.typesetPromise([contentDiv]).then(() => {
      // Update the content with the rendered LaTeX
      contentDiv.innerHTML = contentText;
    });
  }
}