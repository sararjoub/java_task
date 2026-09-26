
//get element from html
let form = document.getElementById("orderForm");

let username = document.getElementById("username");

let password = document.getElementById("password");

let phone = document.getElementById("phone");

let order = document.getElementById("order");

let result = document.getElementById("result");

//when the form is submited

form.onsubmit = function (event) {

    // Prevent page from refreshing
    event.preventDefault();


    // Get values

    let usernameValue = username.value;

    let passwordValue = password.value;

    let phoneValue = phone.value;

    let orderValue = order.value;



    // regex-- Username:
    // Not empty and no spaces
    let usernameRegex = /^\S+$/;


    // Password:
    // At least 8 characters
    // and contains at least one number
    let passwordRegex = /^(?=.*\d).{8,}$/;


    // Phone:
    // Exactly 10 digits
    // Starts with 07
    let phoneRegex = /^07\d{8}$/;



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

    let savedOrder = localStorage.getItem("order");

   let savedUsername = sessionStorage.getItem("username");



    result.className = "result";

    result.innerHTML =
        "Welcome, " + savedUsername + "<br>" +
        "Saved Order: " + savedOrder + "<br>" +
        "Saved Username: " + savedUsername;

};