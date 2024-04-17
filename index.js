let menuicn = document.querySelector(".menuicn"); 
let nav = document.querySelector(".navcontainer"); 

menuicn.addEventListener("click", () => { 
	nav.classList.toggle("navclose"); 
})
//open index.html
function logout() {
	window.location.href = "index.html"; 
}
//open statistic.html
function stats() {

	window.location.href = "statistic.html"; 
}
//open homepage.html
function home() {
	
	window.location.href = "homepage.html"; 
}
//open settings.html
function settings() {
	
	window.location.href = "settings.html"; 
}
