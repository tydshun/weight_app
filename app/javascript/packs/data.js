document.addEventListener("DOMContentLoaded",()=>{
  const btnJson = document.querySelector(".text5");
  btnJson.addEventListener("click",(e)=>{
    const listPhoto = document.querySelector(".ul-photo")
    const textAll = document.querySelector(".area-text")
    const textContent = document.querySelector(".content-text")
    const formData = new FormData(document.querySelector(".text-all"));
    const XHR = new XMLHttpRequest();
    XHR.open("post","/tweets",true)
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      if (XHR.status != 200){
        alert (`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
      const item = XHR.response.tweet;
      const image_url = XHR.response.image;
      const list = document.querySelector(".list-json");
      const formText = document.querySelector(".text3");
      const formText2 = document.querySelector(".text4");
      const HTML = `
        <li class = "photo-up">
            <div class = "photo-img">
              <img src="${image_url}" width="150" height="92">
            </div>
            <span>
            ${item.title}
            </span>
        </li>`;
      list.insertAdjacentHTML("afterend",HTML);
      formText.value = "";
      formText2.value = "";
    
    }
    e.preventDefault();
    if(textAll.classList.contains("outview") == true){
      listPhoto.classList.remove("outview");
      textAll.classList.remove("outview");
      textContent.classList.remove("outview");
    }
    listPhoto.classList.add("inview")
    textAll.classList.add("inview")
    textContent.classList.add("inview")
    
  })
})