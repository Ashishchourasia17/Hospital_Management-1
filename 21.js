// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

let button=document.getElementById("btn")
button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML=
    "Yay! you sucessfully clicked"
})