// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVdX-U__-6zngFiJ_rAdcC9yErXBzhJ5Y",
  authDomain: "crispycrusts-2269b.firebaseapp.com",
  projectId: "crispycrusts-2269b",
  storageBucket: "crispycrusts-2269b.appspot.com",
  messagingSenderId: "875783626253",
  appId: "1:875783626253:web:8d9706f372e1b93ac17f44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//function to validate email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


//submit
const submit = document.getElementById("submit");
submit.addEventListener("click", function(event){
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("create-pwd").value;

  if(!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if(password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
  }

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("user created :", user);
    alert("Creating Account...");
    window.location.href = "index.html"
    // ...
  })
  .catch((error) => {
    handleAuthError(error);
});
});

function showAlert(message, type = "error") {
  console.log(`Alert[${type}]:${message}`);
  alert(message);
}


function handleAuthError(error) {
  const errorCode = error.code ;
  console.log(errorCode);
  switch(errorCode) {
    case "auth/email-already-in-use":
      showAlert("This email address is already in use.");
      break;
    case "auth/invalid-email":
      showAlert("Invalid email address.");
      break;
    case "auth/weak-password":
      showAlert("Password is too weak.");
      break;
    case "auth/operation-not-allowed":
      showAlert("Email/password accounts are not enabled.");
      break;
    case "auth/invalid-credential":
      showAlert("Invalid credential. Please try again.");
      console(errorCode);
      break;
    default:
      showAlert("An unexpected error occurred. Please try again.");
  }
}
