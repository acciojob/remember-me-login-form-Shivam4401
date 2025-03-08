document.getElementById("loginform").addEventListener("submit",(e)=>{
	e.preventDefault();
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;
	const rememberme = document.getElementById("checkbox");
	alert("Logged in as " + username);
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
	alert("Logged in as "+username);
})

 // document.addEventListener("DOMContentLoaded", function () {
 //            const usernameInput = document.getElementById("username");
 //            const passwordInput = document.getElementById("password");
 //            const rememberCheckbox = document.getElementById("checkbox");
 //            const submitButton = document.getElementById("submit");
 //            const existingUserButton = document.getElementById("existing");
            
 //            // Check if credentials are stored in localStorage
 //            const storedUsername = localStorage.getItem("username");
 //            const storedPassword = localStorage.getItem("password");
            
 //            if (storedUsername && storedPassword) {
 //                existingUserButton.classList.remove("hidden");
 //            }
            
 //            document.getElementById("loginForm").addEventListener("submit", function (event) {
 //                event.preventDefault();
 //                const username = usernameInput.value;
 //                const password = passwordInput.value;
                
 //                alert("Logged in as " + username);
                
 //                if (rememberCheckbox.checked) {
 //                    localStorage.setItem("username", username);
 //                    localStorage.setItem("password", password);
 //                } else {
 //                    localStorage.removeItem("username");
 //                    localStorage.removeItem("password");
 //                }
 //            });
            
 //            existingUserButton.addEventListener("click", function () {
 //                alert("Logged in as " + storedUsername);
 //            });
 //        });

