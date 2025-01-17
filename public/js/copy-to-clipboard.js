document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('.code-block code');
  
    codeBlocks.forEach(function(codeBlock) {
      const copyButton = document.createElement('button');
      copyButton.textContent = 'Copy';
      copyButton.classList.add('copy-button');
  
      copyButton.addEventListener('click', function() {
        const text = codeBlock.textContent || codeBlock.innerText;

        navigator.clipboard.writeText(text).then(function() {
          const copyMsg = codeBlock.parentElement.querySelector('.copy-msg');
          if (!copyMsg) {
            const newCopyMsg = document.createElement('div');
            newCopyMsg.textContent = 'Copied!';
            newCopyMsg.classList.add('copy-msg');
            codeBlock.parentElement.appendChild(newCopyMsg);

            setTimeout(function() {
              newCopyMsg.classList.add('show');
            }, 10);
  
            setTimeout(function() {
              newCopyMsg.classList.remove('show');
              setTimeout(function() {
                newCopyMsg.remove();
              }, 300);
            }, 2000);
          }
        }).catch(function(error) {
          alert('Failed to copy text: ' + error);
        });
      });
  
      codeBlock.parentElement.appendChild(copyButton);
    });
  });
  