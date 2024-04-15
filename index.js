let menuicn = document.querySelector(".menuicn"); 
let nav = document.querySelector(".navcontainer"); 

menuicn.addEventListener("click", () => { 
	nav.classList.toggle("navclose"); 
})

function logout() {
	window.location.href = "index.html"; 
}
function stats() {

	window.location.href = "statistic.html"; 
}
function home() {
	
	window.location.href = "homepage.html"; 
}
function settings() {
	
	window.location.href = "Settings.html"; 
}
