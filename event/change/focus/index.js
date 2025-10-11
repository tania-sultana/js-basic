const input = document.querySelector("input");
const p = document.querySelector("p")
input.addEventListener("blur", function(e){
    // console.log("blur is occured");
    // console.log(e.target.value);
    input.value = e.target.value.toUpperCase();
    input.style.backgroundColor + "transparent";
    input.style.padding = "1rem";
    
});
input.addEventListener("focus", function(e){
    // console.log("focus is occured");
    input.style.backgroundColor = "orange"; 
    input.style.padding = "2rem"; 
    input.style.color = "white"; 
    input.style.fontSize = "2rem"; 
    
});
// input.addEventListener("focusin", function(e){
//     console.log("focusin is occured");
    
// });
// input.addEventListener("focusout", function(e){
//     console.log("focusout is occured");
    
// });
input.addEventListener("copy", function(e){
    p.innerText = "copy is occured";
    // console.log("copy is occured");
    
});
input.addEventListener("cut", function(e){
    p.innerText = "cut is occured";
    // console.log("cut is occured");
    
});
input.addEventListener("paste", function(e){
    p.innerText = "paste is occured";
    // console.log("paste is occured");
    
});