// Selecting the necessary DOM elements
const user = document.querySelector("#user");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#login");
const message = document.getElementById('message');

// Function to check if inputs are not empty and enable/disable the login button
function checkEmpty() {
  const passwordInput = password.value.trim();
  const emailInput = user.value.trim();

  loginBtn.disabled = !(passwordInput && emailInput);
}

// Adding event listeners to the input fields
user.addEventListener("input", checkEmpty);
password.addEventListener("input", checkEmpty);

// Adding an event listener to the login button
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const passwordInput = password.value;
  const emailInput = user.value;

  const storedUsername = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");

  if (passwordInput === storedPassword && emailInput === storedUsername) {
    window.location.href = "home.html";
    console.log("Login successful");
  } else {
    // Show error message
    message.classList.remove('hidden');
    message.textContent = "Invalid username or password";
  }
});

// Initial check to set the button state correctly on page load
checkEmpty();
