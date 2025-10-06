    let myVar = document.querySelector("#paraId");
function addStyle(){
    myVar.classList.add("para-style");
}

function removeStyle(){
    myVar.classList.remove("para-style");
} 


// document.querySelectorAll("button")[2].addEventListener("click", function (){
//     alert("Hello");
// });
document.querySelectorAll("button")[2].addEventListener("click", myFunction);
function myFunction(){
    alert("Hello")
}

let myHead = document.querySelector("h1");
myHead.addEventListener("mouseover", function (){
    myHead.classList.add("heading-class");
});
myHead.addEventListener("mouseout", function (){
    myHead.classList.remove("heading-class");
});