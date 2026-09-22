
const menu = [
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
        name: "Chicken",
        price: 3,
        category: "Main Dish",
        available: false
    },
    {
        name: "Pasta",
        price: 6,
        category: "Italian",
        available: true
    },
    {
        name: "Salad",
        price: 2,
        category: "Healthy",
        available: false
    }
];


function showMenu() {

    console.log("---------------Menu --------------");

    for (let i = 0; i < menu.length; i++) {

        console.log(
            `${menu[i].name} - $${menu[i].price} - ${menu[i].category} - Available: ${menu[i].available}`
        );
    }
}



function selectFood() {

    let selectedFood;

    // Keep asking until an available food is selected
    while (!selectedFood) {

        let foodName = prompt("Enter food name:");

        for (let i = 0; i < menu.length; i++) {

            // Skip unavailable food
            if (!menu[i].available) {
                continue;
            }

            if (menu[i].name.toLowerCase() === foodName.toLowerCase()) {

                selectedFood = menu[i];

                
                break;
            }
        }

        // If food was not found
        if (!selectedFood) {
            alert("Food not found or unavailable. Please try again.");
        }
    }

    return selectedFood;
}



showMenu();




const selectedFood = selectFood();


console.log("===== SELECTED FOOD =====");

for (let property in selectedFood) {

    console.log(property + ": " + selectedFood[property]);
}


let quantity = Number(prompt("Enter quantity:"));


// Make sure quantity is valid
while (quantity <= 0 || isNaN(quantity)) {

    quantity = Number(prompt("Please enter a valid quantity:"));
}


const totalPrice = selectedFood.price * quantity;



document.write("<h1>Restaurant Order</h1>");

document.write("<p><strong>Food:</strong> " + selectedFood.name + "</p>");

document.write("<p><strong>Category:</strong> " + selectedFood.category + "</p>");

document.write("<p><strong>Price:</strong> $" + selectedFood.price + "</p>");

document.write("<p><strong>Quantity:</strong> " + quantity + "</p>");

document.write("<p><strong>Total Price:</strong> $" + totalPrice + "</p>");