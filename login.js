// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

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
submit.addEventListener("click", function(event) {
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

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating Account...");
    window.location.href = "index.html" ;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
});
});

