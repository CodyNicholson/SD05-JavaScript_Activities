//Activity - Menu for Monday Bonus Code Solution

//create an array of 6 meats
let meats = [];
meats.push("Chicken");
meats.push("Prime Rib");
meats.push("PorterHouse");
meats.push("New York Sirloin");
meats.push("Rib Eye");
meats.push("Lamb Chops");  

// create an array of 4 vegetables
let vegetables = [];
vegetables.push("Greens");
vegetables.push("Brocolli");
vegetables.push("Asparagus");
vegetables.push("Spinach");

//create an array of 5 desserts
let desserts =[];
desserts.push("Apple Pie");
desserts.push("Pecan Pie");
desserts.push("Carrot Cake");
desserts.push("Chocolate Cake");
desserts.push("Peanut Butter Cake");

// remove the last element in the meats array
meats.pop(); //Removes "Lamb Chops";

// remove the last element in the meats array
vegetables.pop(); // removes "Spinach"

// assign a dessert
let dessert = desserts[3]; 

// Combine the arrays
var mondayMenu = meats.concat(vegetables);

//Add dessert to the mondayMenu;
mondayMenu.push(dessert); // "Chocolate Cake";

console.log("Mondays Menu: " + mondayMenu); //output Mondays Menu!
