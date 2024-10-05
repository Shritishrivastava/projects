const container = document.getElementById('container');
const loginButton = document.getElementById('login');
const registerButton = document.getElementById('register');

// Event listener for the Register button
registerButton.addEventListener('click', () => {
    container.classList.add('active'); // Add 'active' class to show sign-up form
});

// Event listener for the Login button
loginButton.addEventListener('click', () => {
    container.classList.remove('active'); // Remove 'active' class to show sign-in form
});

