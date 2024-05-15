document.getElementById("showPassword").addEventListener("change", function() {
    var passwordField = document.getElementById("password");
    if (this.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Perform validation
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");
    usernameError.textContent = "";
    passwordError.textContent = "";

    if (username.trim() === "") {
        usernameError.textContent = "Please enter your username";
        return;
    }

    if (password.trim() === "") {
        passwordError.textContent = "Please enter your password";
        return;
    }

    // If validation passes, you can proceed with login logic here
    // For demonstration purposes, let's just log the credentials
    console.log("Username:", username);
    console.log("Password:", password);

    // After successful login, redirect to home page
    window.location.href = "home.html";
});

document.getElementById("forgotPassword").addEventListener("click", function(event) {
    event.preventDefault();
    // Add your logic for forgot password functionality here
    alert("Forgot Password functionality coming soon!");
});
