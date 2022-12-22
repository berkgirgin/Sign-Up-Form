
const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone_number");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");

const errorMessages = document.querySelector(".error")


form.addEventListener("submit", function(e) {
    let messages = [];
    if (password.value === "" || password === null) {
        messages.push("you need to enter a password");
    } else if (password.value !== confirmPassword.value) {
        messages.push("Passwords don't match, please check your entries");
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorMessages.innerHTML = messages.join(",");
    } else {
        errorMessages.innerHTML = "";
    }
});

