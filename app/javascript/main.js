'use strict'
document.addEventListener("DOMContentLoaded", function(){
    
  //Tweetボタンを押した時
   const btn = document.querySelector(".char1");
   btn.addEventListener("click",(e)=>{;
     console.log(e)
      // const title = document.querySelector(".header");
      const content = document.querySelector(".content");
      const text = document.querySelector(".text-area");
      const add = document.querySelectorAll(".char")
      content.classList.toggle("outview");
      text.classList.toggle("outview");
      btn.classList.toggle("outview");
      btn.innerHTML = ("Tweet");
      const outviewText = btn.textContent;
      btn.innerHTML = null;
      outviewText.split('').forEach(function (c) {
        btn.innerHTML += '<span class = "char">'+c+'</span>';
      });
      console.log(outviewText)
      console.log(add)
      
     
      
      // title.classList.add("inview");
      
    });
  //Tweetボタンを押した時ここまで
  
});
