var firebaseConfig = {
    apiKey: "AIzaSyANi0sYWhW4UvySKDRuHwTUlm8jjsw7g24",
    authDomain: "proj2-a5a5e.firebaseapp.com",
    databaseURL: "https://proj2-a5a5e.firebaseio.com",
    projectId: "proj2-a5a5e",
    storageBucket: "proj2-a5a5e.appspot.com",
    messagingSenderId: "556498212606",
    appId: "1:556498212606:web:296bcb5cfa44f30e61b7af",
    measurementId: "G-T8PL8X3Y0N"
  };
 
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const auth = firebase.auth();

 
  function login_btn() {

  var email = $("#email").val();
  var password = $("#pwd").val();

    const login = firebase.auth().signInWithEmailAndPassword(email,password);
    login.catch(error => alert(error.message));
    alert("login done");
  }

   function signup_btn() {
    var email= $("#email").val();
    var password= $("#pwd").val();

     const signup= firebase.auth().createUserWithEmailAndPassword(email,password);
     signup.catch(error => alert(error.message));
     alert("sign up done");
  }
 function logout_btn() {

    const logout = auth.signout();
    alert("logout done");

 }
  
  auth.onAuthStateChanged(function(user){
    if(user){
        alert("user active!");
    }
    else{
      alert("no user inactive");
    }
  });




















































