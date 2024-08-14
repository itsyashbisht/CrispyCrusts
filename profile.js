const profilebtn = document.querySelector("#profile-btn");
const passwordbtn = document.querySelector("#password-btn");
const securitybtn = document.querySelector("#security-btn");
const profilesec = document.querySelector(".profile-sec");
const profileSection = document.querySelector("#profile-section");
const passwordSection = document.querySelector("#password-section");
const securitySection = document.querySelector("#security-section");
const tabsbar = document.querySelector("#tabs-bar");
const previousBtn = document.querySelector(".previous-btn");

profilebtn.addEventListener("click", () => {
    profileSection.style.display = "";
    tabsbar.style.display = "none";
});

passwordbtn.addEventListener("click", () => {
    passwordSection.style.display = "flex";
    tabsbar.style.display = "none" ;
});

securitybtn.addEventListener("click", () => {
    tabsbar.style.display = "none" ;
    securitySection.style.display = "block" ;
});

previousBtn.addEventListener("click", () => {
    console.log("hahahah")
    window.location.href = "profile.html";
    tabsbar.style.display = "" ;
    profileSection.style.display ="none" ;
    passwordSection.style.display ="none" ;
    securitySection.style.display ="none" ;
})


const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("uploadimg");
const imageView = document.getElementById("img-view");

inputFile.addEventListener("change",uploadImage);

function uploadImage(){
    // inputFile.files[0];
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    console.log(imgLink);
    dropArea.style.backgroundImage = `url(${imgLink})`;
    imageView.style.display = "none";
}

const saveChanges = document.querySelector("#save-changes");

saveChanges.addEventListener("click",() => {
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    const profilePic = document.querySelector(".profile-picture");
    profilePic.style.backgroundImage = `url(${imgLink})`;
    profilePic.style.borderRadius = "50%"
    window.location.href = "#profile-section";
    imageView.style.display = "";
    dropArea.style.backgroundImage = "none";
})