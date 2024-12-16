console.log("hello")
// let boxes=document.getElementsByClassName("box")
// console.log(boxes)
// boxes[2].style.backgroundColor="red"

// document.getElementById("redbox").style.backgroundColor="blue"

// document.querySelector(".box").style.backgroundColor="yellow"

console.log(document.querySelectorAll(".box"))
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="yellow"
}
)