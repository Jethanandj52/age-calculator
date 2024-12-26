function cal(){
    let date=document.getElementById("age").value
    let container=document.getElementById("ans")
    let dicision=document.getElementById("dicision")

    container.style.display="block"

    let birthDate= date.split("-")
    let year = birthDate[0];
    let month = birthDate[1];
    let day = birthDate[2];
    
    let today = new Date();
    let todayYear = today.getFullYear();
    let todayMonth = today.getMonth() + 1;
    let todayDay = today.getDate();

    let finalYear= todayYear-year;
    let finalMonth= todayMonth-month;
    let finalDay= todayDay-day;
    if(date===""){
        dicision.innerHTML=`<h3>Please enter your birthdate</h3><br>`
    }
   else if(year>todayYear || month>todayMonth ){
        dicision.innerHTML=`<h3>You entered invalid date</h3> <br>`
         
    }
    else if(day>todayDay && month>=todayMonth){
        dicision.innerHTML=`<h3>You entered invalid date</h3> <br>`
    }
    else if(month<todayMonth && day>todayDay){
        finalMonth= finalMonth-1
        finalDay= finalDay+30
         dicision.innerHTML=`<h3>You are ${finalYear} Years, ${finalMonth} Months and ${finalDay} Days old</h3> <br>`

    }
   
    else{
         dicision.innerHTML=`<h3>You are ${finalYear} Years, ${finalMonth} Months and ${finalDay} Days old</h3> <br>`
    }


}
function Ok(){
    document.getElementById("ans").style.display="none"
}