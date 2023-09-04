var state = document.querySelector("h5")
var add = document.querySelector(".add")
var remove = document.querySelector(".remove")
var flag = 0
add.addEventListener("click",function(){
    
    if(flag==0){
        add.innerHTML = "Remove"
        add.style.backgroundColor = "#888"
        state.innerHTML = "Friends"
        state.style.color = "green"
        flag = 1
    }
    else{
        add.innerHTML = "Add Friend"
        add.style.backgroundColor = "limegreen"
        state.innerHTML = "Strangers"
        state.style.color = "red"
        flag = 0
    }
    
})

