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
    // If above condition is true, error message is cleared
    usernameError.textContent = "";
    return true;
  }
}

// Validation for email input
function validateEmail() {
  // Variable declared and assigned to given regex pattern
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // Checks if current value of emailInput matches assigned regex pattern
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address.";
    return false;
  } else {
    // If input value matches given regex pattern, error message is cleared
    emailError.textContent = "";
    return true;
  }
}

// Validation for password input
function validatePassword() {
  const passwordValue = passwordInput.value;
  // Checks if password input data passes custom conditions
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

// Validity functions called whenever user types or changes the value in that input field, providing real-time feedback
usernameInput.addEventListener("input", validateUsername);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);
confirmPasswordInput.addEventListener("input", validateConfirmPassword);

// Listens for form's submission handling
registrationForm.addEventListener("submit", (event) => {
  // Stops default form submission behavior
  event.preventDefault();
  // Gathers validation status of input fields by calling dedicated validation functions for each
  const isUsernameValid = validateUsername();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();
  // If input value for selected properties returns true (valid)
  if (
    isUsernameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid
  ) {
    // Displays success message
    alert("Registration successful!");

    // Implementation to save username to localStorage
    localStorage.setItem("username", usernameInput.value);

    // Optionally, reset the form
    registrationForm.reset();
  } else {
    // Error handling to direct user's attention to the first invalid input field, then guides them to correct
    if (!isUsernameValid) {
      usernameInput.focus();
    } else if (!isEmailValid) {
      emailInput.focus();
    } else if (!isPasswordValid) {
      passwordInput.focus();
    } else if (!isConfirmPasswordValid) {
      confirmPasswordInput.focus();
    }
  }
});
