

const form = document.getElementById("orderForm");

const username = document.getElementById("username");

const password = document.getElementById("password");

const phone = document.getElementById("phone");

const order = document.getElementById("order");

const result = document.getElementById("result");



form.onsubmit = function (event) {

    // Prevent page from refreshing
    event.preventDefault();


    // Get values

    const usernameValue = username.value;

    const passwordValue = password.value;

    const phoneValue = phone.value;

    const orderValue = order.value;



    // Username:
    // Not empty and no spaces
    const usernameRegex = /^\S+$/;


    // Password:
    // At least 8 characters
    // and contains at least one number
    const passwordRegex = /^(?=.*\d).{8,}$/;


    // Phone:
    // Exactly 10 digits
    // Starts with 07
    const phoneRegex = /^07\d{8}$/;



    if (!usernameRegex.test(usernameValue)) {

        result.innerHTML =
            "Username is invalid. It must not be empty or contain spaces.";

        result.className = "result error";

        return;
    }


    if (!passwordRegex.test(passwordValue)) {

        result.innerHTML =
            "Password must be at least 8 characters and contain a number.";

        result.className = "result error";

        return;
    }


    if (!phoneRegex.test(phoneValue)) {

        result.innerHTML =
            "Phone must be exactly 10 digits and start with 07.";

        result.className = "result error";

        return;
    }


    

    localStorage.setItem("order", orderValue);




    sessionStorage.setItem("username", usernameValue);


    // Get saved data

    const savedOrder = localStorage.getItem("order");

    const savedUsername = sessionStorage.getItem("username");



    result.className = "result";

    result.innerHTML =
        "Welcome, " + savedUsername + "<br>" +
        "Saved Order: " + savedOrder + "<br>" +
        "Saved Username: " + savedUsername;

};