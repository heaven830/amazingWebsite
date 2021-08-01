localStorage.setItem("user", "none");

function login(){
	const loginForm = document.getElementById("login-form");
	const loginButton = document.getElementById("login-form-submit");
	const loginErrorMsg = document.getElementById("login-error-msg");
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "heaven830" && password === "HeavenLindenstruth") {
        location.assign("index.html");
		localStorage.setItem("user", "heaven");
    }
	else if (username === "incertae_sedis" && password === "SeanSanders") {
        location.assign("index.html");
		localStorage.setItem("user", "sean");
    }
	else {
        loginErrorMsg.style.opacity = 1;
    }
}

function toMissYou(){
	if(localStorage.getItem("user") === "heaven"){
		location.assign("thinkingOfYouHeaven.html");
	}
	else{
		location.assign("thinkingOfYou.html");
	}
}
