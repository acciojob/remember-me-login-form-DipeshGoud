check();

function check() {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  const existingUserButton = document.getElementById("existing");

  if (username && password) {
    existingUserButton.style.display = "inline"; // Show the button if there are saved user details
    existingUserButton.addEventListener("click", () => {
      alert("Logged in as " + username);
    });
  } else {
    existingUserButton.style.display = "none"; // Hide the button if there are no saved user details
  }
}

document.getElementsByTagName("form")[0].addEventListener("submit", function(event) {
  event.preventDefault();
  
  const rememberCheckbox = document.getElementById("checkbox");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  
  if (rememberCheckbox.checked) {
    localStorage.setItem("username", usernameInput.value);
    localStorage.setItem("password", passwordInput.value);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  alert("Logged in as " + usernameInput.value);
});
