const loginbtn = document.querySelector(".login");
const signupbtn = document.querySelector(".Signup");
const form1 = document.querySelector(".form1");
const form2 = document.querySelector(".form2");
const cancelbtn = document.querySelector(".cancel-btn");
const cancelbtn2 = document.querySelector("#cancel2");


loginbtn.addEventListener("click",() => {
    form1.style.display = "none";
    form2.style.display = "" ;
})

signupbtn.addEventListener("click",() => {
    form2.style.display = "none";
    form1.style.display = "";

})

cancelbtn.addEventListener("click", () => {
    toggle("");
});
cancelbtn2.addEventListener("click", () => {
    toggle("");
});

function toggle(){
    var blur = document.querySelector("#blur");
    blur.classList.toggle("active");
    var popup = document.querySelector("#Signup-box");
    popup.classList.toggle("active")
}
