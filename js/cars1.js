/* cars.js */
const carInv = [{make: "Jaguar",
model: "F-Type",
year: "2018",
color: "White",
price: 5900},

{make: "Cadillac",
model: "XT5",
year: "2018",
color: "Burgundy",
price: 39395},

{make: "BMW",
model: "2 Series",
year: "2018",
color: "Red",
price: 34800},

{make: "Mercedes Benz",
model: "AMG GLA 45 SUV",
year: "2018",
color: "Black",
price: 50000},

{make: "Tesla",
model: "Model S",
year: "2018",
color: "Red",
price: 88350},

{make: "Bentley",
model: "Bentley-Continental",
year: "2018",
color: "Blue",
price: 201225}
]
table = document.getElementById("gallery");             





// rows
for(let i = 0; i < table.rows.length; i++){
//cells
for(let j = 0; j < table.rows[i].cells.length; j++){
table.rows[i].cells[j].innerHTML = carInv[i][j];
}
}

//function carsBtns(
//document.getElementById(["#jaguar, #mercedes, #cadillac, #tesla, #bentley, #bmw"],
//);



/*function calculateTax(car) {
return car.price * 1.08;
} */
