
let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let gender = prompt("Enter your gender (male or female):");

let order;
let isAvailable;

if (gender === "male") {
    alert("Welcome Mr. " + name);
} 
else if (gender === "female") {
    alert("Welcome Ms. " + name);
} 
else {
    alert("Welcome " + name);
}

if (age < 16) {
    alert("You are not eligible to place an order");
} 
else {

    order = prompt("Enter your order: shawarmah, burger, zinger");

    if (order === "zinger" || order === "burger" || order === "shawarmah") {
        isAvailable = true;
        alert("Your order is being prepared");
    } 
    else {
        isAvailable = false;
        alert("Invalid order, please try again");
    }

    if (age >= 18 && isAvailable) {
        alert("Order is confirmed");
    } 
    else if (age < 18 || !isAvailable) {
        alert("Order requires verification");
    }
}

console.log("Customer Name: " + name);
console.log("Customer Gender: " + gender);
console.log("Customer Age: " + age);
console.log("Customer Order: " + order);

document.write("Customer Name: " + name + "<br>");
document.write("Customer Gender: " + gender + "<br>");
document.write("Customer Age: " + age + "<br>");
document.write("Customer Order: " + order + "<br>");
document.write("Order Status: " + isAvailable);
