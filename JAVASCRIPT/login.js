// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBddeinizq56xii6cYPNerhiRJmBdmZ5hs",
  authDomain: "r2-lms-ht.firebaseapp.com",
  projectId: "r2-lms-ht",
  storageBucket: "r2-lms-ht.appspot.com",
  messagingSenderId: "263481975331",
  appId: "1:263481975331:web:8a16901e44a13593790796"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

var email = document.getElementById("email");
var password = document.getElementById("password");
window.login= function(e) {
  e.preventDefault();
  var obj = {
    email: email.value,
    password: password.value,
  };

  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      alert("Logged in Successfully");
      var aaaa =  success.user.uid;
      localStorage.setItem("uid", aaaa);
      console.log(aaaa);
      window.location.replace('LMS.html');
    })
    .catch(function (err) {
      alert("Login error: " + err);
    });

  console.log(obj);
};
