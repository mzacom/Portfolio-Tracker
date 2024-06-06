// Global scope variables for elements
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");
const requiredPassword = document.querySelector("#requiredPass");
const registerBtn = document.querySelector("#register");
const linkTo = document.querySelector("#link");

// Check password match function
function checkPassword() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (
    password === confirmPassword &&
    password.trim() !== "" &&
    confirmPassword !== ""
  ) {
    requiredPassword.textContent = "Password Match";
    requiredPassword.style.color = "green";
    requiredPassword.classList.remove("hidden");
    registerBtn.disabled = false;
  } else {
    requiredPassword.textContent = "Password does not match";
    requiredPassword.style.color = "red";
    requiredPassword.classList.remove("hidden");
  }
}

// Add input event listeners to check passwords as the user types
passwordInput.addEventListener("input", checkPassword);
confirmPasswordInput.addEventListener("input", checkPassword);

// Register button event listener
registerBtn.addEventListener("submit", async (e) => {
  e.preventDefault();

  // All input values
  const nameInput = document.querySelector("#name").value;
  const emailInput = document.querySelector("#email").value;
  const genderInput = document.querySelector("#gender").value;
  const password = passwordInput.value;

  try {
    await validate(emailInput, password);
  } catch (error) {
    console.log(error);
  }
});

// Validate function using promises
async function validate(email, password) {
  try {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  } catch (error) {
    console.log(error);
  }
}
confirmPassword.value = "";
// confirming the confirm password
passwordInput.addEventListener("input", checkPassword);
confirmPasswordInput.addEventListener("input", checkPassword);

linkTo.addEventListener("click", () => {
  window.location.href = "login.html";
});

