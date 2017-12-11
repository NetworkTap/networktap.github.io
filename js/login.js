function login(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    console.log(email);
    console.log(password);
    var loginDone=true;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    console.log("works");
    if(error){
        console.log("login failed")
        var errorCode = error.code;
        var errorMessage = error.message;
        document.getElementById("error").innerHTML = errorMessage;
        loginDone=false;
    }
    });
    if(loginDone){
        document.getElementById("error").innerHTML = " ";
        console.log("logged in");
        window.location.assign("../html/profile.html");
    }
}
function testFunc(){
    console.log("js is working");
}
