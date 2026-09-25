

function reverseNumber(number) {

    let reversed = 0;

    while (number > 0) {

        let digit = number % 10;

        reversed = reversed * 10 + digit;

        number = Math.floor(number / 10);
    }

    return reversed;
}

console.log(reverseNumber(532443));


// Q2: Even or Odd

console.log("Q2:");

for (let i = 0; i <= 15; i++) {

    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }

}

// Q3: Insert Dashes

function insertDashes(number) {

    let result = "";

    for (let i = 0; i < number.length; i++) {

        if (i === 0) {
            result += number[i];
        }
        else if (number[i] === "2") {
            result += "-";
            result += number[i];
        }
        else if (number[i] === "6") {
            result += "-";
            result += number[i];
        }
        else if (number[i] === "8") {
            result += "-";
            result += number[i];
        }
        else {
            result += number[i];
        }
    }

    return result;
}

let number = "025468";

console.log(insertDashes(number));



// Q4: Age Checker

function Agechecker(age) {

    if (age >= 18) {
        console.log("The user is Adult");
    } else {
        console.log("The user is Minor");
    }

}


Agechecker(20);
Agechecker(15);