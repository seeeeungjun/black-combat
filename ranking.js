// 랭킹 스와이퍼 초기화
const rankingSwipers = document.querySelectorAll('.ranking-swiper');
rankingSwipers.forEach((swiperContainer, index) => {
  new Swiper(swiperContainer, {
    slidesPerView: 5,
    spaceBetween: 0,
    loop: true,
    freeMode: true,
    speed: 5000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    effect: 'slide',
    grabCursor: false,
    pagination: false,
    navigation: false,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    preventInteractionOnTransition: false,
  });
});

// 챔피언별 +버튼 클릭 시 해당 스와이퍼만 보이기

document.getElementById("btn-light").onclick = function(){
    document.getElementById("swiper-light").classList.add("active");
    document.getElementById("btn-light").style.display = "none";
    document.getElementById("btn-light-close").style.display = "inline-block";
    document.getElementById("swiper-welter").classList.remove("active");
    document.getElementById("swiper-middle").classList.remove("active");
}
document.getElementById("btn-welter").onclick = function(){
    document.getElementById("swiper-light").classList.remove("active");
    document.getElementById("swiper-welter").classList.add("active");
    document.getElementById("swiper-middle").classList.remove("active");
    document.getElementById("btn-welter").style.display = "none";
    document.getElementById("btn-welter-close").style.display = "inline-block";
}
document.getElementById("btn-welter-close").onclick = function(){
    document.getElementById("swiper-welter").classList.remove("active");
    document.getElementById("btn-welter").style.display = "inline-block";
    document.getElementById("btn-welter-close").style.display = "none";
}
document.getElementById("btn-middle").onclick = function(){
    document.getElementById("swiper-light").classList.remove("active");
    document.getElementById("swiper-welter").classList.remove("active");
    document.getElementById("swiper-middle").classList.add("active");
    document.getElementById("btn-middle").style.display = "none";
    document.getElementById("btn-middle-close").style.display = "inline-block";
}
document.getElementById("btn-middle-close").onclick = function(){
    document.getElementById("swiper-middle").classList.remove("active");
    document.getElementById("btn-middle").style.display = "inline-block";
    document.getElementById("btn-middle-close").style.display = "none";
}

document.getElementById("btn-light-close").onclick = function(){
    document.getElementById("swiper-light").classList.remove("active");
    document.getElementById("btn-light").style.display = "inline-block";
    document.getElementById("btn-light-close").style.display = "none";
}