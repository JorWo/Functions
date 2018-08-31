var spicyAhi = {
	fishType: "Ahi",
  sauce: "Sriracha & Mayo",
  price: 100.00,
  rice: "White",
  ounces: 8,
};

window.alert("Spicy Ahi");
//Ask the user for amount of spicy ahi to buy
var getOunces = prompt("How many ounces?");
//Display the total amount of ounces the user will buy
window.alert("You are buying " + getOunces + " ounces of spicy ahi");
//Then display the total dollar amount
window.alert("Your total price is " + "$" + getOunces*spicyAhi.price/spicyAhi.ounces);