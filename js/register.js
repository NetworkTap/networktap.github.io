function register(){
    console.log("func working")
    var email = document.getElementById('email').value;
    var pOne = document.getElementById('password').value;
    var pTwo = document.getElementById('confirm_password').value;
    var checked = document.getElementById('agree').checked;
    console.log(email);
    console.log(pOne);
    console.log(pTwo);
    console.log(checked)
    if(pOne!=pTwo){
        console.log("not equal")
        document.getElementById("error").innerHTML = "Passwords did not match. Please try again.";
    }
    if(checked==false){
        document.getElementById("errorTwo").innerHTML = "You must agree to the Terms and Conditions to continue"
    }
    else if((pOne==pTwo)&&checked==true){
        console.log("all good!")
        document.getElementById("error").innerHTML = " ";
    }
}