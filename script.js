function ageChecker(){
    let age = document.querySelector("input").value;
    let ageNum = parseInt(age);
    let text = document.querySelector("#div2");
   if(ageNum>=18){
    text.innerHTML=`<br><h3>You are eligible to vote</h3>`;
    text.style.color="red" ;
    }
    else{
        text.innerHTML=`<br><h3>You are not eligible to vote</h3>`;
        text.style.color="green" ;

    }
   
}