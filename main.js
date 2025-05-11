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

// 輪播圖
const imgList = document.querySelector('.slider')
const width = imgList.offsetWidth

    
let mglt = 0
function run() {
    mglt -= width
    imgList.style.marginLeft=mglt+'px'
    if (mglt<=-width*4) {
      mglt=width
    }
}
setInterval(run,2000)

// 最新消息左右切換
const left = document.getElementById('left')
const right = document.getElementById('right')
const news = document.querySelector('.news')
const news_bar = document.querySelector('.news_bar')
const news_width = news.clientWidth
const news_bar_width = news_bar.clientWidth
console.log(news_width)
console.log(news_bar_width)
let newMargin=0
left.addEventListener('mousedown',()=>{
  if (news_bar_width<=news_width + newMargin){
    let currentMargin = parseInt(news.style.marginLeft) || 0;
    newMargin = currentMargin - 250;
    news.style.marginLeft = newMargin + 'px';
    console.log("Current marginLeft:", newMargin,news_width);
  }
})
right.addEventListener('mousedown',()=>{
  if (newMargin<=-1){
    newMargin += 250;
    news.style.marginLeft = newMargin + 'px';
    console.log("Current marginLeft:", newMargin,news_width);
  }
})
