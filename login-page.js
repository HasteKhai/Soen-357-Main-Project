const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("submit");
const loginErrorMsg = document.getElementById("error");

// Add an event listener to the login button
loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    // Get the username and password from the form
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    const storedPassword = localStorage.getItem(username);
    if (password === storedPassword) {
        alert("You have successfully logged in.");
        window.location.href = "homepage.html"; // Navigate to another page
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

