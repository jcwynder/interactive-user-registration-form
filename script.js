// Selection of all necessary DOM elements
const registrationForm = document.getElementById("registrationForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// Get the password toggle buttons
const passwordToggle = document.getElementById("togglePassword");
const confirmPasswordToggle = document.getElementById("toggleConfirmPassword");

// Loads saved username value from localStorage into username field
const savedUsername = localStorage.getItem("username");
if (savedUsername) {
  usernameInput.value = savedUsername;
}

// Real-time validation functions:

// Validation for username input using the Constraint Validation API
function validateUsername() {
  if (!usernameInput.validity.valid) {
    if (usernameInput.validity.valueMissing) {
      usernameError.textContent = "Username is required.";
    } else {
      usernameError.textContent = "Username is invalid.";
    }
    return false;
  } else {
    usernameError.textContent = "";
    return true;
  }
}

// Validation for email input using the Constraint Validation API
function validateEmail() {
  if (!emailInput.validity.valid) {
    if (emailInput.validity.valueMissing) {
      emailError.textContent = "Email is required.";
    } else if (emailInput.validity.typeMismatch) {
      emailError.textContent = "Please enter a valid email address.";
    }
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

// Validation for password input using the Constraint Validation API
function validatePassword() {
  if (!passwordInput.validity.valid) {
    if (passwordInput.validity.valueMissing) {
      passwordError.textContent = "Password is required.";
    } else if (passwordInput.validity.tooShort) {
      passwordError.textContent =
        "Password must be at least 8 characters long.";
    } else if (passwordInput.validity.patternMismatch) {
      passwordError.textContent =
        "Password must include uppercase, lowercase, and a number.";
    }
    return false;
  } else {
    passwordError.textContent = "";
    return true;
  }
}

// Validation for password confirmation input using the Constraint Validation API
function validateConfirmPassword() {
  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordError.textContent = "Passwords do not match.";
    return false;
  } else {
    confirmPasswordError.textContent = "";
    return true;
  }
}

// Function to toggle password visibility and icon style
function togglePasswordVisibility(inputElement, toggleButtonElement) {
  // Get the icon inside the button
  const icon = toggleButtonElement.querySelector("i");
  // Checks current type of the password input field
  if (inputElement.type === "password") {
    // If input field's type is "password", input field type is changed to "text", making the password visible
    inputElement.type = "text";
    // When input field type is "text", the eye icon is removed and the eye-slash icon is added to indicate the password is now visible
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    // If input field's type is not "password", input field type is reverted to "password", hiding the password
    inputElement.type = "password";
    // When input field type is reverted to "password", the eye-slash icon is removed and the eye icon is added to indicate the password is hidden
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

// Validity functions called whenever user types or changes the value in that input field, providing real-time feedback
usernameInput.addEventListener("input", validateUsername);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);
confirmPasswordInput.addEventListener("input", validateConfirmPassword);

// Checks if element exists
if (passwordToggle) {
  // Attaches a click event listener to the passwordToggle button
  passwordToggle.addEventListener("click", () => {
    // When passwordToggle button is clicked, togglePasswordVisibility function is called to excute toggle functionality for passwordInput field
    togglePasswordVisibility(passwordInput, passwordToggle);
  });
}

// Checks if element exists
if (confirmPasswordToggle) {
  // Attaches a click event listener to the confirmPasswordToggle button
  confirmPasswordToggle.addEventListener("click", () => {
    // When confirmPasswordToggle button is clicked, togglePasswordVisibility function is called to excute toggle functionality for confirmPasswordInput field
    togglePasswordVisibility(confirmPasswordInput, confirmPasswordToggle);
  });
}

// Listens for form's submission handling
registrationForm.addEventListener("submit", (event) => {
  // Stops default form submission behavior
  event.preventDefault();

  // Call checkValidity() for each field
  const isUsernameValid = validateUsername();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();

  // If all inputs are valid
  if (
    isUsernameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid
  ) {
    // Displays success message
    alert("Registration successful!");

    // Save username to localStorage
    localStorage.setItem("username", usernameInput.value);

    // Optionally, reset the form
    registrationForm.reset();
  } else {
    // If any input is invalid, focus on the first invalid field
    const invalidField = registrationForm.querySelector(":invalid");
    if (invalidField) invalidField.focus();
  }
});
