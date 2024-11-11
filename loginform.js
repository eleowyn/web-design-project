document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');
    const emailInput = document.getElementById('email');
    const successPopup = document.getElementById('successPopup');

    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });

    // Input animations
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        // Add focused class when input is focused
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });

        // Remove focused class when input is blurred
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.classList.remove('focused');
            }
        });

        // Add has-value class when input has value
        input.addEventListener('input', function() {
            if (this.value !== '') {
                this.classList.add('has-value');
            } else {
                this.classList.remove('has-value');
            }
        });
    });

    // Form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Add loading state
        const submitBtn = this.querySelector('.login-btn');
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            // Show success popup
            successPopup.classList.add('show');
            
            // Reset form
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Login</span><i class="fa fa-arrow-right"></i>';
                submitBtn.disabled = false;
                successPopup.classList.remove('show');
                loginForm.reset();
            }, 2000);
        }, 1500);
    });

    // Social login buttons hover animation
    const socialBtns = document.querySelectorAll('.social-btn');
    socialBtns.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });

        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.offsetLeft;
            const y = e.clientY - e.target.offsetTop;

            const ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            ripples.classList.add('ripple');
            
            this.appendChild(ripples);

            setTimeout(() => {
                ripples.remove();
            }, 1000);
        });
    });

    // Email validation animation
    emailInput.addEventListener('input', function() {
        if (this.validity.valid) {
            this.parentElement.classList.add('valid');
            this.parentElement.classList.remove('invalid');
        } else {
            this.parentElement.classList.remove('valid');
            this.parentElement.classList.add('invalid');
        }
    });
});