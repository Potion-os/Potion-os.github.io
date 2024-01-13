// renderContent.js

MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

document.addEventListener('DOMContentLoaded', function () {
    // Function to render Markdown and LaTeX content
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
      } else {
        // Process Markdown using Marked
        const renderedContent = marked(contentText);
  
        // Update the content with the rendered Markdown
        contentDiv.innerHTML = renderedContent;
      }
    }
  
    // Call renderContent when the DOM is loaded
    renderContent();
  
    // Attach renderContent to the input event for dynamic updates
    const contentEditable = document.querySelector('.content');
    contentEditable.addEventListener('input', renderContent);
  });
  