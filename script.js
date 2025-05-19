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

// Implementation to save username to localStorage
localStorage.setItem("username", usernameInput.value);

// Loads saved username value from localStorage
const savedUsername = localStorage.getItem("username");
if (savedUsername) {
  usernameInput.value = savedUsername;
}

// Real-time validation functions:

// Validation for username input
function validateUsername() {
  // If input is invalid (blank), returns error message for user to submit proper input
  if (!usernameInput.value.trim()) {
    usernameError.textContent = "Username is required.";
    return false;
  } else {
    // If input is valid, error message is cleared
    usernameError.textContent = "";
    return true;
  }
}

// Validation for email input
function validateEmail() {
  // If input is invalid (blank), returns error message for user to submit proper input
  if (!emailInput.validity.valid) {
    emailError.textContent = "Please enter a valid email address.";
    return false;
  } else {
    // If input is valid, error message is cleared
    emailError.textContent = "";
    return true;
  }
}

// Validation for password input
function validatePassword() {
  // Checks if password input data passes custom conditions
  const passwordValue = passwordInput.value;
  if (passwordValue.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters long.";
    return false;
  } else if (!/[a-z]/.test(passwordValue)) {
    passwordError.textContent = "Password must include a lowercase letter.";
    return false;
  } else if (!/[A-Z]/.test(passwordValue)) {
    passwordError.textContent = "Password must include an uppercase letter.";
    return false;
  } else if (!/[0-9]/.test(passwordValue)) {
    passwordError.textContent = "Password must include a number.";
    return false;
  } else {
    // If custom validation rules are met (true), error message is cleared
    passwordError.textContent = "";
    return true;
  }
}
// Validation for password confirmation input
function validateConfirmPassword() {
  // Checks if confirmPasswordInput value does not equal passwordInput value (returns false)
  if (confirmPasswordInput.value !== passwordInput.value) {
    // Returns error message if condition above returns false
    confirmPasswordError.textContent = "Passwords do not match.";
    return false;
  } else {
    // If condition above returns true, error message is cleared
    confirmPasswordError.textContent = "";
    return true;
  }
}

// Add input event listeners for real-time validations
usernameInput.addEventListener("input", validateUsername);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);
confirmPasswordInput.addEventListener("input", validateConfirmPassword);
