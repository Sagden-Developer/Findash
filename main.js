let next = document.getElementById('next')
let previous = document.getElementById('previous')
let navs = document.querySelector('.navigations')
let space = 40
var num = 0
next.addEventListener('click',()=>{
    if(num==0){
        return false
    }
    num--
    navs.style.transform += `translateX(${space}px)`
})
previous.addEventListener('click',()=>{
    navs.style.transform += `translateX(-${space}px)`
    num++
})