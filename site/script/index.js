// document.addEventListener("DOMContentLoaded", function () {
//     const nameInput = document.getElementById("nameField");
//     const emailInput = document.getElementById("emailField");
//     const passwordInput = document.getElementById("passwordField");
//     const signUpBtn = document.getElementById("signupbtn");

    
//     signUpBtn.disabled = true;
    

    
//     function validateFields() {
//         if (
//             nameInput.value.trim() !== "" &&
//             emailInput.value.trim() !== "" &&
//             passwordInput.value.trim() !== ""
//         ) {
            
//             signUpBtn.disabled = false;
//             signUpBtn.style.opacity = "1"; 
//         } 
//         else {

//             signUpBtn.disabled = true;
//             signUpBtn.style.opacity = "0.5"; 
//         }
//     }

    
//     nameInput.addEventListener("input", validateFields);
//     emailInput.addEventListener("input", validateFields);
//     passwordInput.addEventListener("input", validateFields);

   
//     signUpBtn.addEventListener("click", function (event) {
//         event.preventDefault(); 
    
//         if (
//             nameInput.value.trim() === "" ||
//             emailInput.value.trim() === "" ||
//             passwordInput.value.trim() === ""
//         ) {
//             alert("Please fill in all fields before signing up!");
//         } else {
//             window.location.href = "warrior.html"; 
//         }
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("nameField");
    const emailInput = document.getElementById("emailField");
    const passwordInput = document.getElementById("passwordField");
    const signUpBtn = document.getElementById("signupbtn");

    // Disable the button initially
    signUpBtn.disabled = true;
    signUpBtn.style.opacity = "0.5"; // Ensure the button is semi-transparent when disabled

    // Function to validate fields
    function validateFields() {
        const isNameValid = nameInput.value.trim() !== "";
        const isEmailValid = emailInput.value.trim() !== ""; // Only check if the email field is not empty
        const isPasswordValid = passwordInput.value.trim() !== "";

        if (isNameValid && isEmailValid && isPasswordValid) {
            // Enable the button if all fields are filled
            signUpBtn.disabled = false;
            signUpBtn.style.opacity = "1"; // Make the button fully visible
        } else {
            // Disable the button if any field is empty
            signUpBtn.disabled = true;
            signUpBtn.style.opacity = "0.5"; // Make the button semi-transparent
        }
    }

    // Add input event listeners to all fields
    nameInput.addEventListener("input", validateFields);
    emailInput.addEventListener("input", validateFields);
    passwordInput.addEventListener("input", validateFields);

    // Add click event listener to the Sign Up button
    signUpBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission (if the button is inside a form)

        if (
            nameInput.value.trim() === "" ||
            emailInput.value.trim() === "" ||
            passwordInput.value.trim() === ""
        ) {
            alert("Please fill in all fields before signing up!");
        } else {
            // Increment the sign-up counter in local storage
            incrementSignUpCounter();

            // Redirect to warrior.html
            window.location.href = "warrior.html";
        }
    });

    // Function to increment the sign-up counter in local storage
    function incrementSignUpCounter() {
        // Get the current counter value from local storage
        let signUpCount = localStorage.getItem("signUpCount");

        // If the counter doesn't exist, initialize it to 0
        if (signUpCount === null) {
            signUpCount = 0;
        } else {
            signUpCount = parseInt(signUpCount, 10); // Convert string to number
        }

        // Increment the counter
        signUpCount++;

        // Save the updated counter to local storage
        localStorage.setItem("signUpCount", signUpCount);

        // Log the updated counter to the console (for debugging)
        console.log(`Total sign-ups: ${signUpCount}`);
    }
});