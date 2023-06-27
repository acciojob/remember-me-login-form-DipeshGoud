//your JS code here. If required.

check();

function check() {
	username = localStorage.getItem("username");
	password = localStorage.getItem("password");

	if (username && password) {
		let but = document.createElement("button");
		but.id = "existing"
		but.textContent = "Login as existing user";
		but.addEventListener("click", () => {
			alert("Logged in as " + savedUsername);
		})

		document.body.appendChild(but);
	}
}

document.getElementsByTag(form)[0].addEventListener("submit", (event) =>{
	event.preventDefault();
	let c = document.getElementById("checkbox");
	let n = document.getElementById("username");
	let p = document.getElementById("password");
	
		if(this.checked){
		localStorage.setItem("username", n.value);
		localStorage.setItem("password", p.value);
		}else{
		localStorage.removeItem("username", n.value);
		localStorage.removeItem("password", p.value);
		}

	alert("Logged in as " + username);
	})
