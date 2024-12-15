document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");
    const message = document.getElementById("message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from submitting normally

        // Get form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
		const phone = document.getElementById("phone").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Simple form validation
        if (name === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // If validation is successful, display success message
        message.classList.remove("hidden");
        message.style.opacity = 1;

        // Optionally reset form after successful submission
        form.reset();
    });
});
