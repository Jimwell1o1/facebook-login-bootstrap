
    const passwordInput = document.getElementById('password-input');
    const passwordToggle = document.getElementById('password-toggle');

    passwordToggle.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        this.classList.toggle('bi-eye-slash-fill');
        this.classList.toggle('bi-eye-fill');
    });

    passwordInput.addEventListener('input', function() {
        if (passwordInput.value === '') {
            passwordToggle.style.display = 'none';
        } else {
            passwordToggle.style.display = 'block';
        }
    });