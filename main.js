const hotDrinks = ["Espresso", "Latte", "Cappuccino", "Mocha", "Macchiato", "Chai Latte", "Hot Chocolate", "Matcha Latte", "Americano", "London Fog"];
const icedDrinks = ["Iced Coffee", "Iced Latte", "Cold Brew", "Iced Mocha", "Iced Matcha Latte", "Iced Chai Latte", "Iced Americano", "Iced Caramel Macchiato", "Iced London Fog", "Iced Hot Chocolate"];
const sandwiches = ["Turkey & Swiss", "Ham & Cheddar", "Caprese", "Chicken Pesto", "BLT", "Veggie Delight", "Roast Beef & Provolone", "Egg Salad", "Grilled Cheese", "Tuna Melt"];
const pastries = ["Croissant", "Chocolate Croissant", "Blueberry Muffin", "Cinnamon Roll", "Almond Danish", "Apple Turnover", "Lemon Tart", "Scone", "Eclair", "Macaron"];


const hotDrinksDetails = {
    "Espresso": { price: 3.00, calories: 5, vegan: "Yes", vegetarian: "Yes" },
    "Latte": { price: 4.50, calories: 150, vegan: "No", vegetarian: "Yes" },
    "Cappuccino": { price: 4.50, calories: 120, vegan: "No", vegetarian: "Yes" },
    "Mocha": { price: 5.00, calories: 250, vegan: "No", vegetarian: "Yes" },
    "Macchiato": { price: 4.25, calories: 80, vegan: "No", vegetarian: "Yes" },
    "Chai Latte": { price: 4.75, calories: 180, vegan: "No", vegetarian: "Yes" },
    "Hot Chocolate": { price: 4.00, calories: 300, vegan: "No", vegetarian: "Yes" },
    "Matcha Latte": { price: 4.75, calories: 200, vegan: "No", vegetarian: "Yes" },
    "Americano": { price: 3.50, calories: 10, vegan: "Yes", vegetarian: "Yes" },
    "London Fog": { price: 4.50, calories: 160, vegan: "No", vegetarian: "Yes" }
};

const icedDrinksDetails = {
    "Iced Coffee": { price: 3.75, calories: 5, vegan: "Yes", vegetarian: "Yes" },
    "Iced Latte": { price: 4.50, calories: 140, vegan: "No", vegetarian: "Yes" },
    "Cold Brew": { price: 4.25, calories: 5, vegan: "Yes", vegetarian: "Yes" },
    "Iced Mocha": { price: 5.25, calories: 280, vegan: "No", vegetarian: "Yes" },
    "Iced Matcha Latte": { price: 4.75, calories: 180, vegan: "No", vegetarian: "Yes" },
    "Iced Chai Latte": { price: 4.75, calories: 170, vegan: "No", vegetarian: "Yes" },
    "Iced Americano": { price: 3.50, calories: 5, vegan: "Yes", vegetarian: "Yes" },
    "Iced Caramel Macchiato": { price: 5.00, calories: 250, vegan: "No", vegetarian: "Yes" },
    "Iced London Fog": { price: 4.50, calories: 150, vegan: "No", vegetarian: "Yes" },
    "Iced Hot Chocolate": { price: 4.25, calories: 320, vegan: "No", vegetarian: "Yes" }
};

const sandwichesDetails = {
    "Turkey & Swiss": { price: 7.50, calories: 450, vegan: "No", vegetarian: "No" },
    "Ham & Cheddar": { price: 7.00, calories: 430, vegan: "No", vegetarian: "No" },
    "Caprese": { price: 6.75, calories: 400, vegan: "No", vegetarian: "Yes" },
    "Chicken Pesto": { price: 8.25, calories: 520, vegan: "No", vegetarian: "No" },
    "BLT": { price: 7.00, calories: 480, vegan: "No", vegetarian: "No" },
    "Veggie Delight": { price: 6.50, calories: 380, vegan: "Yes", vegetarian: "Yes" },
    "Roast Beef & Provolone": { price: 8.00, calories: 500, vegan: "No", vegetarian: "No" },
    "Egg Salad": { price: 6.25, calories: 420, vegan: "No", vegetarian: "Yes" },
    "Grilled Cheese": { price: 5.50, calories: 460, vegan: "No", vegetarian: "Yes" },
    "Tuna Melt": { price: 7.75, calories: 490, vegan: "No", vegetarian: "No" }
};

const pastriesDetails = {
    "Croissant": { price: 3.75, calories: 250, vegan: "No", vegetarian: "Yes" },
    "Chocolate Croissant": { price: 4.25, calories: 320, vegan: "No", vegetarian: "Yes" },
    "Blueberry Muffin": { price: 3.50, calories: 350, vegan: "No", vegetarian: "Yes" },
    "Cinnamon Roll": { price: 4.75, calories: 450, vegan: "No", vegetarian: "Yes" },
    "Almond Danish": { price: 4.00, calories: 400, vegan: "No", vegetarian: "Yes" },
    "Apple Turnover": { price: 4.50, calories: 380, vegan: "Yes", vegetarian: "Yes" },
    "Lemon Tart": { price: 5.00, calories: 330, vegan: "No", vegetarian: "Yes" },
    "Scone": { price: 3.75, calories: 290, vegan: "No", vegetarian: "Yes" },
    "Eclair": { price: 4.75, calories: 370, vegan: "No", vegetarian: "Yes" },
    "Macaron": { price: 3.25, calories: 150, vegan: "No", vegetarian: "Yes" }
};

const button = document.querySelector("#button")
let showing = false

const onClick = function() {
    document.querySelector("#sidebarHotDrinksList").innerHTML = "";
    document.querySelector("#sidebarIcedDrinksList").innerHTML = "";
    document.querySelector("#mainSandwichesList").innerHTML = "";
    document.querySelector("#mainPastriesList").innerHTML = "";

    if (showing == false) {
        hotDrinks.forEach(item => {
            document.querySelector("#sidebarHotDrinksList").innerHTML +=
            `<li>
            ${item}: $${hotDrinksDetails[item].price} <br> Calories: ${hotDrinksDetails[item].calories} <br> Vegetarian: ${hotDrinksDetails[item].vegetarian} <br> Vegan: ${hotDrinksDetails[item].vegan}
            </li>`;
        });
        
        icedDrinks.forEach(item => {
            document.querySelector("#sidebarIcedDrinksList").innerHTML +=
            `<li>
            ${item}: $${icedDrinksDetails[item].price} <br> Calories: ${icedDrinksDetails[item].calories} <br> Vegetarian: ${icedDrinksDetails[item].vegetarian} <br> Vegan: ${icedDrinksDetails[item].vegan}
            </li>`;
        });
        
        sandwiches.forEach(item => {
            document.querySelector("#mainSandwichesList").innerHTML +=
            `<li>
            ${item}: $${sandwichesDetails[item].price} <br> Calories: ${sandwichesDetails[item].calories} <br> Vegetarian: ${sandwichesDetails[item].vegetarian} <br> Vegan: ${sandwichesDetails[item].vegan}
            </li>`;
        });
        
        pastries.forEach(item => {
            document.querySelector("#mainPastriesList").innerHTML +=
            `<li>
            ${item}: $${pastriesDetails[item].price} <br> Calories: ${pastriesDetails[item].calories} <br> Vegetarian: ${pastriesDetails[item].vegetarian} <br> Vegan: ${pastriesDetails[item].vegan}
            </li>`;
        });
        showing = true
    } else {
        hotDrinks.forEach(item => {
            document.querySelector("#sidebarHotDrinksList").innerHTML +=
            `<li>
            ${item}: $${hotDrinksDetails[item].price}
            </li>`;
        });
        
        icedDrinks.forEach(item => {
            document.querySelector("#sidebarIcedDrinksList").innerHTML +=
            `<li>
            ${item}: $${icedDrinksDetails[item].price}
            </li>`;
        });
        
        sandwiches.forEach(item => {
            document.querySelector("#mainSandwichesList").innerHTML +=
            `<li>
            ${item}: $${sandwichesDetails[item].price}
            </li>`;
        });
        
        pastries.forEach(item => {
            document.querySelector("#mainPastriesList").innerHTML +=
            `<li>
            ${item}: $${pastriesDetails[item].price}
            </li>`;
        });
        showing = false
    }
}


window.addEventListener('load', function() {
    hotDrinks.forEach(item => {
        document.querySelector("#sidebarHotDrinksList").innerHTML +=
        `<li>${item}: $${hotDrinksDetails[item].price}</li>`;
    });
    
    icedDrinks.forEach(item => {
        document.querySelector("#sidebarIcedDrinksList").innerHTML +=
        `<li>${item}: $${icedDrinksDetails[item].price}</li>`;
    });
    
    sandwiches.forEach(item => {
        document.querySelector("#mainSandwichesList").innerHTML +=
        `<li>${item}: $${sandwichesDetails[item].price}</li>`;
    });
    
    pastries.forEach(item => {
        document.querySelector("#mainPastriesList").innerHTML +=
        `<li>${item}: $${pastriesDetails[item].price}</li>`;
    });
});

button.addEventListener("click", onClick)