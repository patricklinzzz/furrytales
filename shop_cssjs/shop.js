const dogfood = document.querySelector('.dogfood')
const catfood = document.querySelector('.catfood')
const classDogfood = document.querySelector('.class_dogfood')
const classCatfood = document.querySelector('.class_catfood')
classCatfood.addEventListener('mousedown',()=>{
    dogfood.style.display='none'
    catfood.style.display='flex'
})
classDogfood.addEventListener('mousedown',()=>{
    catfood.style.display='none'
    dogfood.style.display='flex'
})
