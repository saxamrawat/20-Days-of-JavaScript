
document.forms['signup-form'].onsubmit = function(event){

	let errors = document.querySelectorAll(".error");
	for(let error of errors){
		error.style.display = "none";
	}
	document.querySelector(".success").innerHTML = "";


	if(this.username.value.trim() === ""){
		document.querySelector(".username-error").innerHTML = "Please enter a username";
		document.querySelector(".username-error").style.display = "block";
		event.preventDefault();
		return false;
	}

	if(this.password.value.trim() === ""){
		document.querySelector(".password-error").innerHTML = "Please enter a password";
		document.querySelector(".password-error").style.display = "block";
		event.preventDefault();
		return false;
	}

	if(this.email.value.trim() === ""){
		document.querySelector(".email-error").innerHTML = "Please enter a email";
		document.querySelector(".email-error").style.display = "block";
		event.preventDefault();
		return false;
	}

}