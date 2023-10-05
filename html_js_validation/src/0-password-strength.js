document.addEventListener('DOMContentLoaded', function () {
    const passwordForm = document.getElementById('passwordForm');
    const passwordInput = document.getElementById('password');
    const errorParagraph = document.getElementById('error');
  
    passwordForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the form from submitting by default
  
      const password = passwordInput.value;
  
      // Define a regular expression to check for each criteria
      const minLength = 8;
      const uppercaseRegex = /[A-Z]/;
      const lowercaseRegex = /[a-z]/;
      const digitRegex = /[0-9]/;
      const specialCharRegex = /[!@#$%^&*]/;
  
      // Check each criteria
      let isValid = true;
      let errorMessage = '';
  
      if (password.length < minLength) {
        isValid = false;
        errorMessage = 'Password must be at least 8 characters long.';
      } else if (!uppercaseRegex.test(password)) {
        isValid = false;
        errorMessage = 'Password must contain at least one uppercase letter.';
      } else if (!lowercaseRegex.test(password)) {
        isValid = false;
        errorMessage = 'Password must contain at least one lowercase letter.';
      } else if (!digitRegex.test(password)) {
        isValid = false;
        errorMessage = 'Password must contain at least one numeric digit.';
      } else if (!specialCharRegex.test(password)) {
        isValid = false;
        errorMessage = 'Password must contain at least one special character (!@#$%^&*).';
      }
  
      // Display the error message or submit the form
      if (!isValid) {
        errorParagraph.textContent = errorMessage;
      } else {
        errorParagraph.textContent = ''; // Clear any previous error message
        passwordForm.submit(); // Allow form submission
      }
    });
  });
  