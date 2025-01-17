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
          // 기존에 복사 메시지가 존재하는지 확인
          let copyMsg = codeBlock.parentElement.querySelector('.copy-msg');
          
          // 기존 메시지가 있으면 제거
          if (copyMsg) {
            copyMsg.remove();
          }
  
          // 새로운 "Copied!" 메시지 생성
          const newCopyMsg = document.createElement('div');
          newCopyMsg.textContent = 'Copied!';
          newCopyMsg.classList.add('copy-msg');
          codeBlock.parentElement.appendChild(newCopyMsg);
  
          // 메시지 표시
          setTimeout(function() {
            newCopyMsg.classList.add('show');
          }, 10); // 빠르게 보여주기 위해서

          // 2초 후 메시지 숨김
          setTimeout(function() {
            newCopyMsg.classList.remove('show'); // 사라지게
          }, 2000); // 2초 후 사라짐
  
          // 버튼 색상 변경
          copyButton.classList.add('copied');
          setTimeout(function() {
            copyButton.classList.remove('copied'); // 원래 상태로 돌아가게 함
          }, 2000); // 2초 후 버튼 색상 원상복구
        }).catch(function() {
          alert('Failed to copy text');
        });
      });
  
      // 코드 블록에 복사 버튼 삽입
      codeBlock.parentElement.style.position = 'relative';
      codeBlock.parentElement.appendChild(copyButton);
    });
});
