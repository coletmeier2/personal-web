// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Form validation for the contact form
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            validateForm();
        });
    }

    function validateForm() {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // If all validations pass, you can submit the form or perform other actions
        alert('Form submitted successfully!');
        // You can replace the alert with code to submit the form using AJAX or other methods.
    }

    function isValidEmail(email) {
        // A basic email validation function, you can replace it with a more robust solution
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
