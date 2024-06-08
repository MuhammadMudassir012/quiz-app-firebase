import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { auth } from "./config.js";

let sform = document.getElementById("sform");
let semail = document.getElementById("semail");
let spass = document.getElementById("spass");

sform.addEventListener('submit',(event)=>{
    event.preventDefault()
    createUserWithEmailAndPassword(auth, semail.value, spass.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    window.location = 'signin.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorMessage)

  });
})