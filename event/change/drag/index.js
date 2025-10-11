const div = document.querySelector("div");
const p = document.querySelector("p");
p.addEventListener("dragstart", function(e){
    e.dataTransfer.setData("text", e.target.id);
});
p.addEventListener("dragover", function(e){
    e.preventDefault();
});
div.addEventListener("drop", function(e){
    e.preventDefault();
});
div.addEventListener("drop", function(e){
    let id = e.dataTransfer.getData("text");
    console.log(id);
    // let element = document.querySelector(#id);
    // div.appendChild(element);
    // e.preventDefault();
    div.appendChild(document.getElementById(id));
    e.defaultPrevented();
});