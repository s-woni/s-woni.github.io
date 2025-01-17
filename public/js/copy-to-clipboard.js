document.addEventListener('DOMContentLoaded', function() {
    // 모든 코드 블록에 복사 버튼 추가
    const codeBlocks = document.querySelectorAll('pre code');
  
    codeBlocks.forEach(function(codeBlock) {
      const copyButton = document.createElement('button');
      copyButton.textContent = 'Copy';
      copyButton.classList.add('copy-button');
      
      // 복사 버튼 클릭 시 동작
      copyButton.addEventListener('click', function() {
        const text = codeBlock.textContent || codeBlock.innerText;
        navigator.clipboard.writeText(text).then(function() {
          alert('Copied to clipboard!');
        }).catch(function(error) {
          alert('Failed to copy text: ' + error);
        });
      });
      
      // 코드 블록에 복사 버튼 추가
      codeBlock.parentElement.appendChild(copyButton);
    });
  });
  