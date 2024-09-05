document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in both fields.';
    } else {
        errorMessage.textContent = '';
        // Simulate successful login
        alert('Login successful!');
    }
});
