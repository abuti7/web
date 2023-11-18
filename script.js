document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");
    const googleLink = document.getElementById("google-link");

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();
        if (validateForm()) {
            alert("Registration successful!");
        }
    });
    

    googleLink.addEventListener("click", function (e) {
        e.preventDefault();
        alert("Redirecting to Google for sign-up...");
    });

    function validateForm() {
        const usernameInput = document.getElementById("username");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");

        const username = usernameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;


        clearErrors([usernameInput, emailInput, passwordInput]);

        let isValid = true;

        if (username.trim() === "") {
            displayError(usernameInput, "Username is required.");
            isValid = false;
        }

        if (email.trim() === "") {
            displayError(emailInput, "Email is required.");
            isValid = false;
        } else if (!isValidEmail(email)) {
            displayError(emailInput, "Invalid email address.");
            isValid = false;
        }

        if (password.trim() === "") {
            displayError(passwordInput, "Password is required.");
            isValid = false;
        }

        return isValid;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function clearErrors(inputElements) {
        inputElements.forEach(input => {
            const errorDiv = document.getElementById(`${input.id}-error`);
            errorDiv.textContent = "";
            input.classList.remove("error");
        });
    }

    function displayError(input, errorMessage) {
        const errorDiv = document.getElementById(`${input.id}-error`);
        errorDiv.textContent = errorMessage;
        input.classList.add("error");
    }
});

/*validate login*/
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const googleLink = document.getElementById("google-link");
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        if (validateForm()) {
            alert("Login successful!"); 
        }
    });
    googleLink.addEventListener("click", function (e) {
        e.preventDefault();
        alert("Redirecting to Google for sign-in...");
    });
    function validateForm() {
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");

    
        clearErrors([usernameInput, passwordInput]);

        let isValid = true;

        if (usernameInput.value.trim() === "") {
            displayError(usernameInput, "Username is required.");
            isValid = false;
        }

        if (passwordInput.value.trim() === "") {
            displayError(passwordInput, "Password is required.");
            isValid = false;
        }

        return isValid;
    }

    function clearErrors(inputElements) {
        inputElements.forEach(input => {
            const errorDiv = document.getElementById(`${input.id}-error`);
            errorDiv.textContent = "";
            input.classList.remove("error");
        });
    }

    function displayError(input, errorMessage) {
        const errorDiv = document.getElementById(`${input.id}-error`);
        errorDiv.textContent = errorMessage;
        input.classList.add("error");
    }
});