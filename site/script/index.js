document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("nameField");
    const signUpBtn = document.getElementById("signupbtn");


    signUpBtn.style.pointerEvents = "none"; 
    signUpBtn.style.opacity = "0.5"; 

    nameInput.addEventListener("input", function () {
        if (nameInput.value.trim() !== "") {
            signUpBtn.style.pointerEvents = "auto"; 
            signUpBtn.style.opacity = "1"; 
        } else {
            signUpBtn.style.pointerEvents = "none"; 
            signUpBtn.style.opacity = "0.5"; 
        }
    });

   
    signUpBtn.addEventListener("click", function (event) {
        if (nameInput.value.trim() === "") {
            event.preventDefault();
            alert("Please enter your name before signing up!");
        }
    });
});