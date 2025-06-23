// AOS 초기화
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// 언어 전환 기능
var currentLanguage = 'ko';

function changeLanguage(lang) {
  currentLanguage = lang;
  

  // 텍스트 바꾸기
  var elements = document.querySelectorAll('[data-ko][data-en]');
  for (var i = 0; i < elements.length; i++) {
    if (lang === 'ko') {
      elements[i].textContent = elements[i].getAttribute('data-ko');
    } else {
      elements[i].textContent = elements[i].getAttribute('data-en');
    }
  }
  
  // 히어로 설명 바꾸기
  var heroDescription = document.querySelector('.hero-description');
  if (lang === 'ko') {
    heroDescription.textContent = '공정하고 안전한 경기를 위한 규칙';
  } else {
    heroDescription.textContent = 'Rules for fair and safe competition';
  }
}

// 언어 버튼 이벤트 리스너
document.addEventListener('DOMContentLoaded', function() {
  var langButtons = document.querySelectorAll('.lang-btn');
  
  for (var i = 0; i < langButtons.length; i++) {
    langButtons[i].addEventListener('click', function() {
      var lang = this.getAttribute('data-lang');
      changeLanguage(lang);
    });
  }
});





