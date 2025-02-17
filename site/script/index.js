document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("nameField");
    const emailInput = document.getElementById("emailField");
    const passwordInput = document.getElementById("passwordField");
    const signUpBtn = document.getElementById("signupbtn");

   
    signUpBtn.style.pointerEvents = "none";
    signUpBtn.style.opacity = "1";

    function validateFields() {
        if (
            nameInput.value.trim() !== "" &&
            emailInput.value.trim() !== "" &&
            passwordInput.value.trim() !== ""
        ) {
            signUpBtn.style.pointerEvents = "auto";
            signUpBtn.style.opacity = "1";
        } else {
            signUpBtn.style.pointerEvents = "none";
            signUpBtn.style.opacity = "1";
        }
    }

    
    nameInput.addEventListener("input", validateFields);
    emailInput.addEventListener("input", validateFields);
    passwordInput.addEventListener("input", validateFields);

   
    signUpBtn.addEventListener("click", function () {
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