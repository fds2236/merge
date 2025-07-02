document.addEventListener("DOMContentLoaded", function () {
    // 1️⃣ QR 코드 생성
    let qrCodeDiv = document.getElementById("qrcode");
    let qrScript = document.createElement("script");
    qrScript.src = "https://cdn.jsdelivr.net/npm/qrcodejs/qrcode.min.js";
    qrScript.onload = function () {
        new QRCode(qrCodeDiv, {
            text: window.location.href, 
            width: 150,
            height: 150
        });
    };
    document.body.appendChild(qrScript);

    // 2️⃣ 카카오톡 공유 기능
    document.getElementById("kakao-share-btn").addEventListener("click", function () {
        if (!window.Kakao) {
            alert("카카오톡 공유 기능을 사용하려면 Kakao SDK를 불러와야 합니다.");
            return;
        }

        Kakao.init('YOUR_KAKAO_APP_KEY');  // 여기에 본인의 Kakao App Key 입력
        Kakao.Link.sendDefault({
            objectType: "feed",
            content: {
                title: "우리의 모바일 청첩장",
                description: "우리 결혼해요! 자세한 정보는 여기에 있습니다.",
                imageUrl: "https://your-image-url.com/wedding.jpg",
                link: {
                    mobileWebUrl: window.location.href,
                    webUrl: window.location.href
                }
            }
        });
    });
});

// 모달 관련 요소들
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeBtn');

// 모달 열기
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex'; // 모달을 보여줌
});

// 모달 닫기
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // 모달을 숨김
});

// 모달 외부 클릭 시 닫기
/*
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none'; // 모달을 숨김
    }
});
*/
