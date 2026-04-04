document.getElementById("registerForm").addEventListener("submit", function(event) {
    // Prevent the form from submitting automatically
    event.preventDefault();

    // Get all the input values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const terms = document.getElementById("terms").checked;

    // Simple validation using if-else conditions
    if (firstName === "") {
        alert("Please enter your First Name.");
    } 
    else if (lastName === "") {
        alert("Please enter your Last Name.");
    } 
    else if (email === "") {
        alert("Please enter your Email Address.");
    } 
    else if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid Email Address.");
    } 
    else if (password === "") {
        alert("Please enter a Password.");
    } 
    else if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
    } 
    else if (confirmPassword === "") {
        alert("Please confirm your Password.");
    } 
    else if (password !== confirmPassword) {
        alert("Passwords do not match.");
    } 
    else if (terms === false) {
        alert("You must agree to the Terms of Service and Privacy Policy.");
    } 
    else {
        // If all conditions are met
        alert("Registration Successful! Welcome to Tuscany Travel.");
        
        // Clear the form fields after successful registration
        document.getElementById("registerForm").reset();
        
        // Reset password strength UI (specific to this form)
        const strengthLabel = document.getElementById("strengthLabel");
        const bars = [
            document.getElementById("bar1"),
            document.getElementById("bar2"),
            document.getElementById("bar3"),
            document.getElementById("bar4")
        ];
        
        if (strengthLabel) {
            strengthLabel.textContent = "Password strength";
            strengthLabel.style.color = "rgba(255,255,255,0.4)";
        }
        
        bars.forEach(function(bar) {
            if(bar) bar.style.background = "rgba(255,255,255,0.12)";
        });
        
        // Redirect to index page upon successful registration
        window.location.href = "index.html";
    }
});
