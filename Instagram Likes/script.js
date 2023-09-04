var love = document.querySelector("i")
var cont = document.querySelector("#container")

cont.addEventListener("dblclick",function(){
    love.style.opacity="0.6"
    love.style.transform="translate(-50%, -50%) scale(1)"
    setTimeout(function(){
        love.style.opacity="0"
    },1500)
})