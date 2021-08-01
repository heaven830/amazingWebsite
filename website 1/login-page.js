const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "incertae_sedis" && password === "SeanSanders") {
        location.assign("file:///C:/Users/heave/OneDrive/Desktop/website%201/index.htm#");
    }
	else if (username === "heaven830" && password === "HeavenLindenstruth") {
        location.assign("file:///C:/Users/heave/OneDrive/Desktop/website%201/index.htm#");
    }
	else {
        loginErrorMsg.style.opacity = 1;
    }
})

