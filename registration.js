function validateForm() {
   
    var firstName = document.forms["registrationForm"]["firstName"].value;
    var lastName = document.forms["registrationForm"]["lastName"].value;
    var email = document.forms["registrationForm"]["email"].value;
    var password = document.forms["registrationForm"]["password"].value;
    var confirmPassword = document.forms["registrationForm"]["confirmPassword"].value;


    if (firstName == "") {
        document.getElementById("firstNameError").innerHTML = "First name is required";
        return false;
    } else {
        document.getElementById("firstNameError").innerHTML = "";
    }

    
    if (lastName == "") {
        document.getElementById("lastNameError").innerHTML = "Last name is required";
        return false;
    } else {
        document.getElementById("lastNameError").innerHTML = "";
    }

    
    if (email == "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        return false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    
    if (password == "") {
        document.getElementById("passwordError").innerHTML = "Password is required";
        return false;
    } else if (password.length < 8) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters long";
        return false;
    } else {
        document.getElementById("passwordError").innerHTML = "";
    }

    
    if (confirmPassword == "") {
        document.getElementById("confirmPasswordError").innerHTML = "Confirm password is required";
        return false;
    } else if (password != confirmPassword) {
        document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match";
        return false;
    } else {
        document.getElementById("confirmPasswordError").innerHTML = "";
    }

   
    return true;
}
