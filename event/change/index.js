const input = document.querySelector("input");
input.addEventListener("change", changeHandler);
function changeHandler(e){
    console.log(e);
    console.log(e.target.value);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);

}
const programs = document.querySelectorAll("input[name=program]");
// console.log(programs);
Array.from(programs).map((program) => {
    program.addEventListener("change", programHandle)
})
function programHandle(e){
    if(e.target.checked){
        console.log(e.target.value);
    }
}



const department =  document.querySelector("#department");
department.addEventListener("change", departmentHandler);
function departmentHandler(e){
    console.log(e.target.value);
}


const form = document.querySelector('form');
const name = form.querySelector("div #name");
const email = form.querySelector("div #email");
const password = form.querySelector("div #password");
form.addEventListener("submit", submitHandler);
function submitHandler(e){
    e.preventDefault();
    // console.log("submit");
    // console.log(name.value);
    // console.log(email.value);
    // console.log(password.value);

const userInfo = {
    name: name.value,
    email: email.value,
    password: password.value
};
console.log(userInfo);
name.value = "";
email.value = "";
password.value = "";
}