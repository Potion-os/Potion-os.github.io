document.addEventListener('DOMContentLoaded', function () {
  const stickyNotes = document.querySelectorAll('.stickyNote');
  
  stickyNotes.forEach(stickyNote => {
      const stickyNoteHandle = stickyNote.querySelector('.stickyNoteHandle');
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
      const closeButton = stickyNote.querySelector('.closeButtonPost');
      closeButtonPost.addEventListener('click', function () {
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
});