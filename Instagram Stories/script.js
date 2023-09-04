var arr = [
    {profile:"https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    story:"https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
},
{profile:"https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    story:"https://images.unsplash.com/photo-1613005798967-632017e477c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
},
{profile:"https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    story:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
},
{profile:"https://images.unsplash.com/photo-1502323777036-f29e3972d82f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    story:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
},
]

var concat = ""
  
arr.forEach(function(e,idx){
    concat += `<div class="story-image"><img id="${idx}" src="${e.profile}"></img></div>`
    console.log(idx)
})
document.querySelector("#stories").innerHTML=concat

document.querySelector("#stories").addEventListener("click",function(dets){
    document.querySelector("#story-window").style.display = "block"
    document.querySelector("#story-window").style.backgroundImage = `url(${arr[dets.target.id].story})`
    setTimeout(function(){
        document.querySelector("#story-window").style.display = "none"
    },3000)
})