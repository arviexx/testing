// Get the form box
const formBox = document.querySelector('.form-box');

// Buttons to toggle between forms
const showLoginBtn = document.getElementById('show-login');
const showSignupBtn = document.getElementById('show-signup');

// Show the login form
showLoginBtn.addEventListener('click', () => {
    formBox.classList.add('flip'); // Add the flip class
});

// Show the signup form
showSignupBtn.addEventListener('click', () => {
    formBox.classList.remove('flip'); // Remove the flip class
});
