import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { auth } from "./config.js";




let lform = document.getElementById("lform");
let lemail = document.getElementById("lemail");
let lpass = document.getElementById("lpass");

lform.addEventListener('submit',(event)=>{
    event.preventDefault()
    signInWithEmailAndPassword(auth, lemail.value, lpass.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert('Log In Successful');
    window.location =  'welcome.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorMessage)

  });
})