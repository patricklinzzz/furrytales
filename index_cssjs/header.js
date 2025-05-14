const hamburgerMenu = document.getElementById('hamburgerMenu');
const navLinks = document.getElementById('bannerMenu');
// 為漢堡選單圖示添加點擊事件監聽器
hamburgerMenu.addEventListener('click', () => {
    // 切換 navLinks 的 active class (顯示/隱藏選單)
    navLinks.classList.toggle('active');
    // 切換漢堡選單本身的 active class (用於 X 形狀動畫)
    hamburgerMenu.classList.toggle('active');
});

// 回到上方
document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
        } else {
        scrollTopBtn.style.display = "none";
        }
    }
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    });
});