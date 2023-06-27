check();

function check() {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  if (username && password) {
    const existingUserButton = document.createElement("button");
    existingUserButton.id = "existing";
    existingUserButton.textContent = "Login as existing user";
    existingUserButton.addEventListener("click", () => {
      alert("Logged in as " + username);
    });

    document.body.appendChild(existingUserButton);
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
