fetch("menu.json")
    .then(response => response.json())
    .then(data => {

        const menu = document.getElementById("menu");

        localStorage.setItem("restaurantMenu", JSON.stringify(data));

        // Display all menu items using for loop
        for (let i = 0; i < data.length; i++) {

            const item = document.createElement("div");

            item.innerHTML = `
                <h2>${data[i].mealName}</h2>
                <p>Price: $${data[i].price}</p>
                <p>
                    Availability:
                    ${data[i].availability ? "Available" : "Not Available"}
                </p>
                
            `;

            menu.appendChild(item);
        }
    })
    .catch(error => {
        console.error("Error loading menu:", error);
    });