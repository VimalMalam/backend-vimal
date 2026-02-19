// When form is submitted
document.getElementById("userForm").onsubmit = function(e) {
    e.preventDefault(); // Stop page refresh

    // Get values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    // Save in Local Storage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    // Show saved data
    showData();

    // Clear form
    this.reset();
};

// Function to show saved data
function showData() {
    let savedName = localStorage.getItem("name");
    let savedEmail = localStorage.getItem("email");

    if (savedName && savedEmail) {
        document.getElementById("output").innerHTML =
            "Name: " + savedName + "<br>Email: " + savedEmail;
    }
}

// Show data when page loads
showData();
