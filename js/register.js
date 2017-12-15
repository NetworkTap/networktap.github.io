function register(){
    document.getElementById("fireError").innerHTML = "Sorry, our servers are currently down."
    document.getElementById("error").innerHTML = "Please try again later."
    /*
    console.log("func working")
    var email = document.getElementById('email').value;
    var pOne = document.getElementById('password').value;
    var pTwo = document.getElementById('confirm_password').value;
    var checked = document.getElementById('agree').checked;
    if(pOne!=pTwo){
        document.getElementById("error").innerHTML = "Passwords did not match. Please try again.";
    }
    if(checked==false){
        document.getElementById("errorTwo").innerHTML = "You must agree to the Terms and Conditions to continue"
    }
    else if((pOne==pTwo)&&checked==true){
        document.getElementById("error").innerHTML = " ";
        document.getElementById("errorTwo").innerHTML = " ";
        var regSec = true;
        firebase.auth().createUserWithEmailAndPassword(email, pOne).catch(function(error) {
                var errorMessage = error.message;
                document.getElementById("fireError").innerHTML = errorMessage;
                regSec=false;
                console.log(errorMessage);
        });
        if(regSec){
            window.location.assign("../html/login.html");
        }
    }
    */
}