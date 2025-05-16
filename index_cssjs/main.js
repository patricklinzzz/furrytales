window.addEventListener('load', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselSlide = document.querySelector('.carousel-slide');

    // 1. 假設 HTML 中的圖片已經是「原始序列 + 複製序列」的結構
    //    直接獲取輪播帶中所有的圖片
    const allImagesInSlide = Array.from(carouselSlide.querySelectorAll('img'));

    if (allImagesInSlide.length === 0) {
        console.warn("輪播中沒有找到圖片。");
        return;
    }

    // 檢查圖片總數是否為偶數，如果不是，複製可能不完整或HTML結構不符合預期
    if (allImagesInSlide.length % 2 !== 0) {
        console.warn("警告：圖片總數不是偶數。如果HTML已預先複製圖片，請確保複製了完整的序列（例如，原始3張，則總共應有6張）。動畫可能不如預期。");
        // 在此情況下，後續計算可能不準確
    }

    // --- JS 不再執行複製圖片的邏輯 ---

    // --- 計算滾動相關的指標 ---
    // 「原始圖片數量」被假定為總圖片數量的一半
    const numberOfOriginalImages = Math.floor(allImagesInSlide.length / 2);

    if (numberOfOriginalImages === 0) {
        console.warn("沒有足夠的圖片來形成有效的輪播序列。");
        return;
    }

    // 使用實際存在的第一張圖進行測量 (所有圖片的寬度和邊距應一致)
    const firstImageForMeasurement = allImagesInSlide[0];
    const imageStyle = window.getComputedStyle(firstImageForMeasurement);
    const imageVisualWidth = firstImageForMeasurement.offsetWidth;
    const imageMarginRight = parseFloat(imageStyle.marginRight) || 0;
    const scrollWidthPerImage = imageVisualWidth + imageMarginRight;

    // 動畫滾動距離仍是「一組原始圖片」的總寬度
    const totalScrollDistance = scrollWidthPerImage * numberOfOriginalImages;

    if (totalScrollDistance <= 0) {
        console.warn("計算出的總滾動距離無效，請檢查圖片寬度和邊距設定。");
        return;
    }

    // --- 動態創建並應用 CSS @keyframes 動畫 (這部分與之前相同) ---
    const animationName = `continuousMarqueeScroll_${Date.now()}`;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
        @keyframes ${animationName} {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-${totalScrollDistance}px);
            }
        }
    `;
    document.head.appendChild(styleSheet);

    // --- 設定動畫持續時間 (這部分與之前相同) ---
    const desiredSpeedPixelsPerSecond = 40; // 每秒滾動40像素
    let animationDurationSeconds = totalScrollDistance / desiredSpeedPixelsPerSecond;

    if (animationDurationSeconds <= 0 || !isFinite(animationDurationSeconds)) {
        console.warn("動畫持續時間計算錯誤，將使用預設值10秒。");
        animationDurationSeconds = 10;
    }

    carouselSlide.style.animationName = animationName;
    carouselSlide.style.animationDuration = `${animationDurationSeconds}s`;
    carouselSlide.style.animationTimingFunction = 'linear';
    carouselSlide.style.animationIterationCount = 'infinite';

    // (可選) 滑鼠懸停時暫停動畫 (這部分與之前相同)
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            carouselSlide.style.animationPlayState = 'paused';
        });
        carouselContainer.addEventListener('mouseleave', () => {
            carouselSlide.style.animationPlayState = 'running';
        });
    }
});

//左右切換
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