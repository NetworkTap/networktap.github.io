function login(){
    document.getElementById("error").innerHTML = "Sorry, our servers are currently down. Please try again later."
    /*
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var loginDone=true;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorMessage = error.message;
        document.getElementById("error").innerHTML = errorMessage;
        loginDone=false;
    });
    if(loginDone){
        document.getElementById("error").innerHTML = " ";
        window.location.assign("../html/profile.html");
    }
    */
}
