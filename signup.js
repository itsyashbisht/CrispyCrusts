const loginbtn = document.querySelector(".login");
const signupbtn = document.querySelector(".Signup");
const form1 = document.querySelector(".form1");
const form2 = document.querySelector(".form2");

loginbtn.addEventListener("click",() => {
    form1.style.display = "none";
    form2.style.display = "" ;
})

signupbtn.addEventListener("click",() => {
    form2.style.display = "none";
    form1.style.display = "";

})