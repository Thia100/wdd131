document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("nameField");
    const emailInput = document.getElementById("emailField");
    const passwordInput = document.getElementById("passwordField");
    const signUpBtn = document.getElementById("signupbtn");

    
    signUpBtn.disabled = true;
    

    
    function validateFields() {
        if (
            nameInput.value.trim() !== "" &&
            emailInput.value.trim() !== "" &&
            passwordInput.value.trim() !== ""
        ) {
            
            signUpBtn.disabled = false;
            signUpBtn.style.opacity = "1"; 
        } 
        else {

            signUpBtn.disabled = true;
            signUpBtn.style.opacity = "0.5"; 
        }
    }

    
    nameInput.addEventListener("input", validateFields);
    emailInput.addEventListener("input", validateFields);
    passwordInput.addEventListener("input", validateFields);

   
    signUpBtn.addEventListener("click", function (event) {
        event.preventDefault(); 
    
        if (
            nameInput.value.trim() === "" ||
            emailInput.value.trim() === "" ||
            passwordInput.value.trim() === ""
        ) {
            alert("Please fill in all fields before signing up!");
        } else {
            window.location.href = "warrior.html"; 
        }
    });
});

