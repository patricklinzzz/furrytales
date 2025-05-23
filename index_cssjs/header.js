// 回到上方
document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    window.onscroll = function() {scrollFunction()};
    //header動畫
    const header = document.querySelector('header')
    let preScroll = 0

    function scrollFunction() {
        if (document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
        } else {
        scrollTopBtn.style.display = "none";
        }

        const nowScroll =document.documentElement.scrollTop
        if(nowScroll<preScroll){
            header.style.transform="translateY(0%)" //往上
        }else if(nowScroll>preScroll){
            header.style.transform="translateY(-100%)" //往下
        }
        preScroll=nowScroll
    }
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    });
});
