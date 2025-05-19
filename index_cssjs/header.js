const hamburgerMenu = document.getElementById('hamburgerMenu');
const navLinks = document.getElementById('bannerMenu');
// 為漢堡選單圖示添加點擊事件監聽器
hamburgerMenu.addEventListener('click', () => {
    // 切換 navLinks 的 active class (顯示/隱藏選單)
    navLinks.classList.toggle('active');
    // 切換漢堡選單本身的 active class (用於 X 形狀動畫)
    hamburgerMenu.classList.toggle('active');
});

// 回到上方&header動畫
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
    // 偵測往上往下
    let preScroll = 0
    document.addEventListener('scroll',function(){
        const nowScroll =document.documentElement.scrollTop
        if(nowScroll<preScroll){
            header.style.transform="translateY(20%)"
        }else if(nowScroll>preScroll){
            header.style.transform="translateY(-100%)"
        }
        preScroll=nowScroll
    })
});

let oContaner = document.querySelector('.container')
let oMirror = document.querySelector('.mirror')
let oBigImg = document.querySelector('.mirror img')

document.addEventListener('mousemove',e =>{
    const containerRect = oContaner.getBoundingClientRect();
    const containerLeft = containerRect.left;
    const containerTop = containerRect.top;
    let dis_left = e.clientX - containerLeft;
    let dis_top = e.clientY - containerTop;

    oMirror.style.left=dis_left-(oMirror.offsetWidth/2)+'px'
    oMirror.style.top=dis_top-(oMirror.offsetHeight/2)+'px'

    oBigImg.style.left= -(dis_left-(oMirror.offsetWidth/2))+'px'
    oBigImg.style.top= -(dis_top-(oMirror.offsetHeight/2))+'px'
})
