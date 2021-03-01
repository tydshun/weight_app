'use strict'
document.addEventListener("DOMContentLoaded", function(){
  //Tweetボタンを押した時
   const btn = document.querySelector(".char1");
   const content = document.querySelector(".content-text");
   const text = document.querySelector(".text-area");
   const add = document.querySelectorAll(".char")
   const photoBtn = document.querySelector(".char2")
   const photoList = document.querySelector(".photo-ul")
   btn.addEventListener("click",(e)=>{;
    console.log(e)
    // const title = document.querySelector(".header");
    if(content.classList.contains("inview") == true){
      content.classList.remove("inview");
      text.classList.remove("inview");
      photoList.classList.remove("inview");
    }
    content.classList.toggle("outview");
      text.classList.toggle("outview");
      btn.classList.toggle("outview");
      photoList.classList.toggle("outview")
      // btn.innerHTML = ("Enjoy");
      // const outviewText = btn.textContent;
      // btn.innerHTML = null;
      // outviewText.split('').forEach(function (c) {
      //   btn.innerHTML += '<span class = "char">'+c+'</span>';
      // });
      // console.log(outviewText)
      console.log(add)
      // title.classList.add("inview");
    });
  //Tweetボタンを押した時ここまで
  //photolistボタンを押した時
   photoBtn.addEventListener("click",(e)=>{
    console.log(e)
    if(content.classList.contains("outview") == true){
      content.classList.remove("outview");
      text.classList.remove("outview");
      photoList.classList.remove("outview");
    }
    photoList.classList.toggle("inview");
    content.classList.toggle("inview");
    text.classList.toggle("inview");
    // photoBtn.innerHTML = ("TweetsList");
    //   const outviewText = photoBtn.textContent;
    //   photoBtn.innerHTML = null;
    //   outviewText.split('').forEach(function (c) {
    //     photoBtn.innerHTML += '<span class = "char">'+c+'</span>';
    //   });
   })
});