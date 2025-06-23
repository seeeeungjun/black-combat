// 첫 번째 이미지 모달
document.getElementById("fighterImage").onclick = function(){
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = this.src;
}

document.querySelector(".close").onclick = function() {
  document.getElementById("imageModal").style.display = "none";
}

// 두 번째 이미지 모달
document.getElementById("fighterImage2").onclick = function(){
    var modal = document.getElementById("imageModal2");
    var modalImg = document.getElementById("modalImg2");
    modal.style.display = "block";
    modalImg.src = this.src;
}

document.querySelector(".close2").onclick = function() {
  document.getElementById("imageModal2").style.display = "none";
}

//장바구니 


//장바구니 열기
const opencart = document.querySelector(".cart-nav-item")

opencart.addEventListener("click",function(){
  cartModal.style.display = "block";
})


//장바구니 닫기 
    const closecart = document.querySelector(".close-cart")
    const cartModal = document.querySelector(".cart-modal")
    closecart.addEventListener("click",function(){
    cartModal.style.display = "none";


    })
    // 카운트 변수
    let count = 0;


    const addCartBtns = document.querySelectorAll(".add-to-cart-btn");


    const cartCount = document.querySelector(".cart-count");

   
    addCartBtns.forEach(function(btn) {
      btn.addEventListener("click", function() {
        count++;
        cartCount.textContent = count;
      });
    });

    const cartIteamsCon =document.getElementById("cartItems");


const cartTotalElement = document.getElementById("cartTotal");
const clearCartBtn = document.getElementById("clearCart");

let totalAount = 0;



// 총 금액 변수
let totalAmount = 0;

// 필요한 요소 선택
const cartItemsContainer = document.getElementById("cartItems");


// 상품 추가 버튼들


// 상품 클릭 시 장바구니에 정보 등록 + 총 금액 계산
addCartBtns.forEach(button => {
  button.addEventListener("click", () => {
    const name = button.dataset.productName;
    const price = parseInt(button.dataset.productPrice);

    // 장바구니 항목 생성
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <span class="cart-item-name">${name}</span>
      <span class="cart-item-price">₩${price.toLocaleString()}</span>
    `;
    cartItemsContainer.appendChild(cartItem);

    // 총 금액 갱신
    totalAmount += price;
    cartTotalElement.textContent = `₩${totalAmount.toLocaleString()}`;
  });
});

clearCartBtn.addEventListener("click", () => {
  cartItemsContainer.innerHTML = "";  // 장바구니 아이템 전체 삭제
  totalAmount = 0;                    // 총액 초기화
  count = 0;                         // 개수 초기화
  cartTotalElement.textContent = "₩0";  // 총액 표시 초기화
  cartCount.textContent = "0";           // 카운트 표시 초기화
});

const chkBtn = document.getElementById("checkoutBtn");
const alertMessage = document.getElementById("alertMessage");

chkBtn.addEventListener("click", function() {
  // 주문 완료 알림창 띄우기
  alert("주문이 완료되었습니다!");
  
  // 장바구니 비우기
  cartItemsContainer.innerHTML = "";
  totalAmount = 0;
  count = 0;
  cartTotalElement.textContent = "₩0";
  cartCount.textContent = "0";
  
  // 장바구니 모달 닫기
  cartModal.style.display = "none";
  
  // 기존 메시지 제거
  alertMessage.innerHTML = "";
});

// 승부예측 기능
document.addEventListener('DOMContentLoaded', function() {
  let voteData = {
    '1': { '정원희': 20, '박태호': 80 } // 초기값
  };

  // 투표 버튼들 선택
  const voteButtons = document.querySelectorAll('.vote-btn');

  voteButtons.forEach(button => {
    button.addEventListener('click', function() {
      const fighter = this.dataset.fighter;
      const fightId = this.dataset.fightId;
      
  
      // 투표 애니메이션 효과
      this.classList.add('voting');
      
      setTimeout(() => {
        // 투표 데이터 업데이트
        if (!voteData[fightId]) {
          voteData[fightId] = { '정원희': 0, '박태호': 0 };
        }
        
        // 투표 수 증가
        voteData[fightId][fighter]++;
        
        // 전체 투표 수 계산
        const totalVotes = voteData[fightId]['정원희'] + voteData[fightId]['박태호'];
        
        // 퍼센트 계산
        const leftPercentage = Math.round((voteData[fightId]['정원희'] / totalVotes) * 100);
        const rightPercentage = Math.round((voteData[fightId]['박태호'] / totalVotes) * 100);
        
      
        
        // 투표 완료 표시
        this.classList.remove('voting');
        this.classList.add('voted');
        this.textContent = `✓ ${fighter} 투표 완료`;
        
        
  
        
      }, 300);
    });
  });

 
  // 투표 완료 메시지 표시 함수
  function showVoteMessage(message) {
    // 기존 메시지가 있다면 제거
    const existingMessage = document.querySelector('.vote-message');
    if (existingMessage) {
      existingMessage.remove();
    }
    
    // 새 메시지 생성
    const voteMessage = document.createElement('div');
    voteMessage.className = 'vote-message';
    voteMessage.textContent = message;
    document.body.appendChild(voteMessage);
    
    // 메시지 표시
    setTimeout(() => {
      voteMessage.classList.add('show');
    }, 100);
    
    // 3초 후 메시지 제거
    setTimeout(() => {
      voteMessage.classList.remove('show');
      setTimeout(() => {
        if (voteMessage.parentNode) {
          voteMessage.remove();
        }
      }, 300);
    }, 3000);
  }
});
