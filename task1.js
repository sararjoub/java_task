
let menu = [
    {
        name: "Burger",
        price: 4,
        category: "Fast Food",
        available: true
    },
    {
        name: "Pizza",
        price: 5,
        category: "Italian",
        available: true
    },
    {
        name: "Pasta",
        price: 6,
        category: "Italian",
        available: false
    },
    {
        name: "Salad",
        price: 2,
        category: "Healthy",
        available: true
    },
    {
        name: "Chicken",
        price: 4,
        category: "Main",
        available: false
    }
];

function showMenu() {

    document.body.innerHTML="<h2> Menu </h2>"; 

    for (let i = 0; i < menu.length; i++) {

        document.write(
            "<p>" +
            menu[i].name +
            " ||| $" + menu[i].price +
            " |||" + menu[i].category +
            " ||| Available: " + menu[i].available +
            "</p>"
        );
    }
}

showMenu();

setTimeout(function () {

    let foodName = prompt("Enter food name:");

    let selectedFood = null;

    while (selectedFood === null) {

        let found = false;

        for (let i = 0; i < menu.length; i++) {

            if (menu[i].available === false) {
                continue;
            }

            if (menu[i].name.toLowerCase() === foodName.toLowerCase()) {

                selectedFood = menu[i];
                found = true;

                break;
            }
        }

        if (!found) {
            foodName = prompt(
                "Food is not available. Please enter another food name:"
            );
        }
    }


    document.body.innerHTML += "<h2>Selected Food</h2>";

    for (let property in selectedFood) {

        document.body.innerHTML +=
            property + ": " +
            selectedFood[property] +
            "<br>";
    }


    let quantity = Number(prompt("Enter quantity:"));

    let totalPrice = selectedFood.price * quantity;

    document.body.innerHTML += "<h2>Final Order</h2>";

    document.body.innerHTML +=
        "Food: " + selectedFood.name + "<br>";

    document.body.innerHTML +=
        "Quantity: " + quantity + "<br>";

    document.body.innerHTML +=
        "Price: $" + selectedFood.price + "<br>";

    document.body.innerHTML +=
        "Total Price: $" + totalPrice;

}, 500);
