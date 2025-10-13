// console.clear();
// // console.log(location.href);
// // console.log(location.protocol);
// // console.log(location.hostname);
// // console.log(location.port);
// // console.log(location.pathname);


// let locationDiv = document.querySelector(".location-div");
// // console.log(locationDiv);
// let p1 = locationDiv.children[0];
// // console.log(p1);
// p1.textContent = location.href;

// let p2 = locationDiv.children[1];
// p2.textContent = location.protocol;
// let p3 = locationDiv.children[2];
// p3.textContent = location.hostname;
// //differenc between host and hostname
// let p4 = locationDiv.children[3];
// p4.textContent = location.host;
// let p5 = locationDiv.children[4];
// p5.textContent = location.port;
// let p6 = locationDiv.children[5];
// p6.textContent = location.pathname;



// let visitButton = document.getElementById("visit-button");
// visitButton.addEventListener("click", function() {
//     location.assign("https://www.w3schools.com");

// }); 
//////popup boxes - alert, confirm, prompt
// // another portion  of alert
// alert("Hello");
// //confirm("Are you sure");
// function deleteSomething(){
//     let value = confirm("Do you want to delete?");
//     if(value){
//         console.log("Deleted");
//     }
//     else{
//         console.log("Not deleted");
//     }
// }
// deleteSomething();

////prompt
// function welcomeMsg() {
//     let h1 = document.createElement("h1");
//     let text;
//     let name = prompt("Enter your name: ");
//     if(name == null || name == ""){
//         text = 'no name found';
//     }
//     else{
//         text = name;
//     }
//     let textNode = document.createTextNode(text);
//     h1.appendChild(textNode);
//     document.body.appendChild(h1);
  
// }
// welcomeMsg();

// //timing eventy
// setTimeout(() => {
//     console.log("Hello");
// }, 3000);

// setTimeout(display, 2000);
// function display(){
//     console.log("Hello");
// }   
// // set time out 
let saveButton = document.querySelector(".save-btn");
let message = document.querySelector(".message");
// saveButton.addEventListener("click", saveUser);
// function saveUser(){
//     message.textContent = "user registration successfully";
//     setTimeout(() => {
//         message.textContent = "";
//     },2000);
// }

// //count time show
// saveButton.addEventListener("click", displayCount);
// function displayCount(){
//     let count = 1;
//     message.textContent = count;
//     setInterval(() => {
//         count++;
//         message.textContent = count;
//     }, 1000);
// }

//// crete a clock
saveButton.addEventListener("click", displayClock);
function displayClock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

    message.textContent = `${hours}:${minutes}:${seconds}`;

    setInterval(displayClock, 1000);
}
function formatTime(value){
    if(value < 10){
        return "0" + value;
    }
    return value;
}