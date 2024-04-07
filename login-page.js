const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    const storedPassword = localStorage.getItem(username);
    if (password === storedPassword) {
        alert("You have successfully logged in.");
        window.location.href = "index.html"; // Navigate to another page
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})