document.addEventListener('DOMContentLoaded', function() {
    // 모든 코드 블록에 복사 버튼 추가
    const codeBlocks = document.querySelectorAll('pre code');
  
    codeBlocks.forEach(function(codeBlock) {
      const copyButton = document.createElement('button');
      copyButton.textContent = 'Copy';
      copyButton.classList.add('copy-button'); // 복사 버튼에 스타일 적용
  
      // 복사 버튼 클릭 시 동작
      copyButton.addEventListener('click', function() {
        const text = codeBlock.textContent || codeBlock.innerText;
  
        // 클립보드에 텍스트 복사
        navigator.clipboard.writeText(text).then(function() {
          // 복사 성공 후 메시지 표시
          const copyMsg = codeBlock.parentElement.querySelector('.copy-msg');
          if (!copyMsg) {
            const newCopyMsg = document.createElement('div');
            newCopyMsg.textContent = 'Copied!';
            newCopyMsg.classList.add('copy-msg');
            codeBlock.parentElement.appendChild(newCopyMsg);
  
            // 메시지 표시
            setTimeout(function() {
              newCopyMsg.classList.add('show');
            }, 10); // 빠르게 보여주기 위해서
            setTimeout(function() {
              newCopyMsg.classList.remove('show'); // 사라지게
            }, 2000); // 2초 후 사라짐
          }
        }).catch(function() {
          alert('Failed to copy text');
        });
      });
  
      // 코드 블록에 복사 버튼 삽입
      codeBlock.parentElement.style.position = 'relative';
      codeBlock.parentElement.appendChild(copyButton);
    });
  });
  