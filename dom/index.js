// document.getElementById("heading1").innerHTML = "Hello World";
// id
let myheading = document.getElementById("heading1");
myheading.innerHTML = "Hello World";
document.getElementById("paragraph1").innerHTML = "This  is my first paragraph";
//tag name
document.getElementsByTagName("h1")[1].innerHTML = "This is my second heading";
//class name
document.getElementsByClassName("heading3")[0].innerHTML = "This is my third heading";


// query selector
//id
document.querySelector("#para1").innerHTML = "This is para1 id query selector";
//class name
document.querySelector(".para2").innerHTML = "This is para2 class query selector";
//tag name
document.querySelector("p").innerHTML = "This is para tag query selector";
//query selector all
document.querySelectorAll("h1")[2].innerHTML = "This is para tag query selector all";



// testing
document.querySelector("a").innerHTML = "New Link tag";
document.querySelector(" li a").innerHTML = "New Link child tag";
document.querySelector(".my-div a").innerHTML = "New Link class";