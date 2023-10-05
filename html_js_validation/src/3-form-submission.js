function handleFormSubmit(event) {
    event.preventDefault();

    // Retrieve form field values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name == "" || email == "") {
        alert("Please fill in all required fields");
    } else {
        alert("Form submitted successfully!");
    }
}

// Event listener for form submission
document.getElementById("submitForm").addEventListener("submit", handleFormSubmit);