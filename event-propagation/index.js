//bubling means child to parent or inner to outer

const outerDiv = document.getElementById("outer");
const innerDiv = document.getElementById("inner");
outerDiv.addEventListener("click", function(){
    console.log("outer div is clicked");
}, true);
innerDiv.addEventListener("click", function(){
    console.log("inner div is clicked");
}, true);


//capturing means outer to inner opposite bubbling
// const outerDiv = document.getElementById("outer");
// const innerDiv = document.getElementById("inner");
// outerDiv.addEventListener("click", function(){
//     console.log("outer div is clicked");
// }, false);
// innerDiv.addEventListener("click", function(){
//     console.log("inner div is clicked");
// }, false);
