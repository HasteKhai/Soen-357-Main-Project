let menuicn = document.querySelector(".menuicn"); 
let nav = document.querySelector(".navcontainer"); 

menuicn.addEventListener("click", () => { 
	nav.classList.toggle("navclose"); 
})

function logout() {
	// Perform logout action here, such as redirecting to a logout page or triggering a logout API request
	window.location.href = "login.html"; // Example redirect to a logout PHP script
}
