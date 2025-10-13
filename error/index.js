// // try catch just use runtine error detection, not syntax error detection
// // code test
// try{
// alert("Hello");
// alert(x);
// }
// //error detection
// catch(err){
// console.group(err);
// }
// //always run
// finally{
//     alert("Finally");
// }

//// throw error
document.getElementById("checkButton").addEventListener("click", function(){
   let num = document.querySelector("#numTextField").value ;
   try{
    if(num < 5){
        throw "Number is less than 5";
    }
    else if(num > 10){
        throw "Number is greater than 10";
    }
    else{
        console.log(`Number is between 5 to 10 : ${num}`);
    }
   }
   catch(err){
       console.log(err);
   }
});