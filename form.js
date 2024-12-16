let button=document.getElementById("btn")
button.addEventListener("click",()=>{  //in place of ()=> we can also write function()
    document.querySelector("form").innerHTML="<b>Your form has been submitted</b>"
})





// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Get references to form elements
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const genderInputs = document.getElementsByName("a");
    const skillsCheckboxes = document.querySelectorAll("input[type='checkbox']");
    const textareaInput = document.querySelector("textarea");
    const submitButton = document.getElementById("btn");

    // Function to validate form fields
    function validateForm(event) {
        // Clear any existing error messages
        clearErrors();

        let isValid = true;

        // Check if name is filled
        if (nameInput.value.trim() === "") {
            showError(nameInput, "Name is required.");
            isValid = false;
        }

        // Validate email address format
        if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, "Please enter a valid email address.");
            isValid = false;
        }

        // Check if password is filled
        if (passwordInput.value.trim() === "") {
            showError(passwordInput, "Password is required.");
            isValid = false;
        }

        // Check if at least one gender is selected
        if (![...genderInputs].some(input => input.checked)) {
            showError(genderInputs[0].closest("fieldset"), "Please select your gender.");
            isValid = false;
        }

        // Check if at least one skill is selected
        if (![...skillsCheckboxes].some(checkbox => checkbox.checked)) {
            showError(skillsCheckboxes[0].closest("fieldset"), "Please select at least one skill.");
            isValid = false;
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault(); // Prevent form from submitting
        }
    }

    // Helper function to check valid email format
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Function to display error message
    function showError(element, message) {
        const error = document.createElement("div");
        error.className = "error-message";
        error.textContent = message;
        element.parentElement.appendChild(error);
    }

    // Function to clear all error messages
    function clearErrors() {
        const errors = document.querySelectorAll(".error-message");
        errors.forEach(error => error.remove());
    }

    // Add event listener to submit button
    submitButton.addEventListener("click", validateForm);

    // Show character count for the textarea
    textareaInput.addEventListener("input", function () {
        const charCount = textareaInput.value.length;
        let charCountDisplay = document.getElementById("char-count");
        if (!charCountDisplay) {
            charCountDisplay = document.createElement("div");
            charCountDisplay.id = "char-count";
            textareaInput.parentElement.appendChild(charCountDisplay);
        }
        charCountDisplay.textContent = `${charCount} characters entered`;
    });

    // Password visibility toggle
    const togglePasswordButton = document.createElement("button");
    togglePasswordButton.type = "button";
    togglePasswordButton.textContent = "Show Password";
    togglePasswordButton.style.marginLeft = "10px";
    passwordInput.parentElement.appendChild(togglePasswordButton);

    togglePasswordButton.addEventListener("click", function () {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        togglePasswordButton.textContent = type === "password" ? "Show Password" : "Hide Password";
    });
});
