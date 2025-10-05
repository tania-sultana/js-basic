// console.log(localStorage);
localStorage.setItem("userName", "Tom");
localStorage.setItem("password", "12345");
const userName = localStorage.getItem("userName");
const password = localStorage.getItem("password");
console.log(userName, password);
