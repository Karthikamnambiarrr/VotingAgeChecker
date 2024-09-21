function ageChecker(){
    let age = document.querySelector("input").value;
    let ageNum = parseInt(age);
   if(ageNum>=18){
    console.log("You are eligible to vote");
   }
   else{
    console.log("You are not eligible to vote")
   }
}