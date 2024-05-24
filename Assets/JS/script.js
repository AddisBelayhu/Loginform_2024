document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    // Simple validation
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});