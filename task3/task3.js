 
        let customerName = document.getElementById("customerName");
        let order = document.getElementById("order");
        let result = document.getElementById("result");
        let submitButton = document.getElementById("submitButton");



        let buttons = document.getElementsByTagName("button");


        let resultBox = document.getElementsByClassName("result");




        let title = document.querySelector("h1");


        submitButton.onclick = function () {

            let name = customerName.value;

            let selectedOrder = order.value;

            
            result.innerHTML =
                "Hello " + name + "! Your order is " + selectedOrder + ".";
        };


        submitButton.onmouseover = function () {
    submitButton.style.backgroundColor = "pink";
    };

     submitButton.onmouseout = function () {
    submitButton.style.backgroundColor = "purple";
  };