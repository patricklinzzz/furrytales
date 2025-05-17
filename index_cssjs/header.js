const hamburgerMenu = document.getElementById('hamburgerMenu');
const navLinks = document.getElementById('bannerMenu');
// 為漢堡選單圖示添加點擊事件監聽器
hamburgerMenu.addEventListener('click', () => {
    // 切換 navLinks 的 active class (顯示/隱藏選單)
    navLinks.classList.toggle('active');
    // 切換漢堡選單本身的 active class (用於 X 形狀動畫)
    hamburgerMenu.classList.toggle('active');
});

// 回到上方and header動畫
document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    const header = document.getElementById("header")
    window.onscroll = function() {scrollFunction()};
    // window.onscroll = function() {headerUp()};

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
    function headerUp() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header.style.transform="translateY(-50%)"
        header.style.backgroundColor="#fff0"
        }
        else{
            header.style.transform=""
            header.style.backgroundColor="#DEE4E9"
        }
    }
    // 偵測往上往下
    let preScroll = 0
    document.addEventListener('scroll',function(){
        const nowScroll =document.documentElement.scrollTop
        if(nowScroll<preScroll){
            header.style.transform="none"
            header.style.backgroundColor="#DEE4E9"
        }else if(nowScroll>preScroll){
            header.style.transform="translateY(-50%)"
            header.style.backgroundColor="#fff0"
        }
        preScroll=nowScroll
    })
});
