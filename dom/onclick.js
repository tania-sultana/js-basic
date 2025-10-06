//  function myMessage1(){
//             alert("Hello Everyone");
//         }
//  function myMessage2(){
//             alert("Hello button 2");
//         }
 let myVar = document.getElementById("paraId");
 function myMessage1(){
            // let myVar = document.getElementById("paraId");
            myVar.innerHTML = "You have click on button1";
        }
 function myMessage2(){
            // let myVar = document.getElementById("paraId");
            myVar.innerHTML = "You have click on button2";
        }

 function myMessage3(){
            alert("Hello paragraph");
        }

        //image section
let myImg = document.querySelector("#myImgId")
function myPic1(){
    myImg.src = "images/2.jpg";
}
function myPic2(){
    myImg.src = "images/1.jpg";  
}


let heading3 = document.createElement("h1");
let text = document.createTextNode("This is heading 3");
heading3.appendChild(text);
let myDiv = document.getElementById("my-div");
myDiv.appendChild(heading3);

let heading2 = document.getElementsByTagName("h1")[1];
myDiv.removeChild(heading2);


let heading0 = document.createElement("h1");
let text0 = document.createTextNode("This is heading 0");
heading0.appendChild(text0);
let heading1 = document.getElementsByTagName("h1")[0];
myDiv.insertBefore(heading0, heading1);



document.getElementById("my-div");
document.getElementById("my-div").classList;
