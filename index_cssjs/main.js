//左右切換
// 最新消息左右切換
const left = document.getElementById('left')
const right = document.getElementById('right')
const news = document.querySelector('.news')
const news_bar = document.querySelector('.news_bar')
const news_width = news.clientWidth
const news_bar_width = news_bar.clientWidth
let newMargin=0
left.addEventListener('mousedown',()=>{
    if (news_bar_width<=news_width + newMargin){
        let currentMargin = parseInt(news.style.marginLeft) || 0;
        newMargin = currentMargin - 250;
        news.style.marginLeft = newMargin + 'px';
    }
    })
    right.addEventListener('mousedown',()=>{
    if (newMargin<=-1){
        newMargin += 250;
        news.style.marginLeft = newMargin + 'px';
    }
})
// 門市服務項目動畫
const touch = document.getElementsByClassName('loader');
const touch_box = document.getElementsByClassName('loader_box');
const touch_pic = document. getElementsByClassName('pic');
const instore_serviceBG = document.querySelector('.instore_service')
const service_title=document.querySelector('.service_title')
for(let i=0;i<touch.length;i++){
    const touchElement = touch[i]
    const touch_boxElement = touch_box[i]
    const touch_picElement = touch_pic[i]
    const instoreElement = instore_serviceBG[i]
    let arr=["寵物美容","寵物醫療諮詢","寵物住宿"]
    touch_boxElement.addEventListener
    ('mouseover', ()=>{
        touchElement.style.borderColor='#fdb6e7'
        touch_picElement.style.transform='scale(1.5)'
        touch_boxElement.style.transform='scale(0.8)'
        instore_serviceBG.style.backgroundImage=
        'url("pic/service/dogsee'+(i+1)+'.png")'
        service_title.textContent=arr[i]
        service_title.style.opacity=1
    });
    touch_boxElement.addEventListener
    ('mouseout', ()=>{
        touchElement.style.borderColor='#E8368E'
        touch_picElement.style.transform='scale(1)'
        touch_boxElement.style.transform='scale(1)'
        instore_serviceBG.style.backgroundImage='url("pic/service/dog.png")'
        service_title.textContent=""
        service_title.style.opacity=0
    });
}
//標題滑入 進到畫面50%的時候作用
window.addEventListener('scroll', function() {
    let proTitle = document.getElementById('pro_title')
    let treProdBg =document.querySelector('.tre_prod_bg')
    let proTitleTop = proTitle.getBoundingClientRect().top
    // console.log(proTitleTop,main.offsetTop,window.innerHeight,)
    if(proTitleTop<window.innerHeight*0.5){
        proTitle.style.transform='translateX(0)'
        treProdBg.style.transform='translateY(0)'
    }else{
        proTitle.style.transform='translateX(-25%)'
        treProdBg.style.transform='translateY(25%)'
    }
    let basicTitle = document.querySelector('#basic_title')
    let basicBg = document.querySelector('.basic_bg')
    let basicTitleTop = basicTitle.getBoundingClientRect().top
    if(basicTitleTop<window.innerHeight*0.5){
        basicTitle.style.transform='translateX(0)'
        basicBg.style.transform='translateY(0)'
    }else{
        basicTitle.style.transform='translateX(-25%)'
        basicBg.style.transform='translateY(25%)'
    }    
    let instoreTitle = document.querySelector('#instore_title')
    let serviceBg = document.querySelector('.service_bg')
    let instoreTitleTop = instoreTitle.getBoundingClientRect().top
    if(instoreTitleTop<window.innerHeight*0.5){
        instoreTitle.style.transform='translateX(0)'
        serviceBg.style.transform='translateY(0)'
    }else{
        instoreTitle.style.transform='translateX(-25%)'
        serviceBg.style.transform='translateY(25%)'
    }    
});