document.getElementById("loginform").addEventListener("submit",(e)=>{
	e.preventDefault();
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;
	const rememberme = doucument.getElementById("checkbox");
	alert("Logged in as " , username);
	if(rememberme.checked){
		localStorage.setItem("username", username);
		localStorage.setItem("password", password);
	}
	else{
		localStorage.removeItem("username", username);
		localStorage.removeItem("password", password);
	}
});

window.onload = function() {
 const username = localStorage.getItem("username");
 const password = localStorage.getItem("password");
	if(username && password){
		document.getElementById("existing").style.display = "block";
	}
};

document.getElementById("existing").addEventListener("click",()=>{
	const username = localStorage.getItem('username');
	alert("Logged in as ",username);
})

