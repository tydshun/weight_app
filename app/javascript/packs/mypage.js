document.addEventListener("DOMContentLoaded", function(){
  const profileBtn = document.querySelector(".profile-btn")
  const calendarBtn = document.querySelector(".calendar-btn")
  const graphBtn = document.querySelector(".graph-btn")
  const profileView = document.querySelector(".profile")
  const calendarView = document.querySelector(".calendar")
  const graphView = document.querySelector(".graph")

  profileBtn.addEventListener("click", function(){
    if(profileView.classList.contains("in-graph") == true || profileView.classList.contains("in-calendar") == true){
      
    profileView.classList.remove("in-calendar");
    calendarView.classList.remove("in-calendar");
    graphView.classList.remove("in-calendar");
    
    profileView.classList.remove("in-graph");
    calendarView.classList.remove("in-graph");
    graphView.classList.remove("in-graph");
  }


    profileView.classList.toggle("in-profile");
    calendarView.classList.toggle("in-profile");
    graphView.classList.toggle("in-profile");
    
  })

  calendarBtn.addEventListener("click", function(){
    if(profileView.classList.contains("in-graph") == true || profileView.classList.contains("in-profile") == true){
      profileView.classList.remove("in-profile");
    calendarView.classList.remove("in-profile");
    graphView.classList.remove("in-profile");
    
    profileView.classList.remove("in-graph");
    calendarView.classList.remove("in-graph");
    graphView.classList.remove("in-graph");
    }
    profileView.classList.toggle("in-calendar");
    calendarView.classList.toggle("in-calendar");
    graphView.classList.toggle("in-calendar");
    
  })

  graphBtn.addEventListener("click", function(){
    if(profileView.classList.contains("in-calendar") == true || profileView.classList.contains("in-profile") == true){
      profileView.classList.remove("in-profile");
    calendarView.classList.remove("in-profile");
    graphView.classList.remove("in-profile");
    
    profileView.classList.remove("in-calendar");
    calendarView.classList.remove("in-calendar");
    graphView.classList.remove("in-calendar");
    }
    profileView.classList.toggle("in-graph");
    calendarView.classList.toggle("in-graph");
    graphView.classList.toggle("in-graph");
    
  })
})