localStorage.setItem("user", "none");

function login(){
	const loginForm = document.getElementById("login-form");
	const loginButton = document.getElementById("login-form-submit");
	const loginErrorMsg = document.getElementById("login-error-msg");
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "heaven830" && password === "HeavenLindenstruth") {
        location.assign("file:///C:/Users/heave/OneDrive/Desktop/website%201/index.htm#");
		localStorage.setItem("user", "heaven");
    }
	else if (username === "incertae_sedis" && password === "SeanSanders") {
        location.assign("file:///C:/Users/heave/OneDrive/Desktop/website%201/index.htm#");
		localStorage.setItem("user", "sean");
    }
	else {
        loginErrorMsg.style.opacity = 1;
    }
}

function toMissYou(){
	if(localStorage.getItem("user") === "heaven"){
		location.assign("file:///C:/Users/heave/OneDrive/Desktop/website%201/thinkingOfYouHeaven.html");
	}
	else{
		location.assign("file:///C:/Users/heave/OneDrive/Desktop/website%201/thinkingOfYou.html");
	}
}