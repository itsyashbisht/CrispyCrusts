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

// signupbutton.addEventListener ( "click", () => {
//     signuppopup.style.display = "" ;
//     // header.style.display = "none";
//     // tittle.style.display = "none";
//     // signupbutton.style.display = "none";
//     // frontpg.classList.add("show");
//     // // frontpg.style.filter = "brightness(70%)";
//     // // signuppopup.style.filter = "brightness(150%);"

// });

function toggle(){
    var blur = document.querySelector("#blur");
    blur.classList.toggle("active");
    var popup = document.querySelector("#Signup-box");
    popup.classList.toggle("active")
}
