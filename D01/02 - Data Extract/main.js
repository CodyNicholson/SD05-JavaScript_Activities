let gondola = {quantity: 7, insured: true, operational: true, pricePer: 3800};
let stockCar = {quantity: 1, insured: true, operational: false, pricePer: 6500};
let locomotive = {quantity: 5, insured: false, operational: false, pricePer: 2875};
let cattleCar = {quantity: 6, insured: false, operational: false, pricePer: 7500};
let boxCar = {quantity: 8, insured: true, operational: true, pricePer: 4157};
let tankCar = {quantity: 3, insured: true, operational: true, pricePer: 7200};

//Task 1: Get list of all cars reported as non operational (operational = false)
var nonOperational = [];

if (gondola.operational === false)
{
 nonOperational.push("gondola");
}

if (stockCar.operational === false)
{
  nonOperational.push("stockCar");
}

if (locomotive.operational === false)
{
  nonOperational.push("locomotive");
}

if (cattleCar.operational === false)
{
  nonOperational.push("cattleCar");
}

if (boxCar.operational === false)
{
  nonOperational.push("boxCar");
}

if (gondola.operational === false)
{
  nonOperational.push("tankCar");
}
console.log("Accounting: List of non operational cars: " + nonOperational);

//Task 2: Get count of all cars with no Insurance
let notInsuredCount = 0;
if (gondola.insured === false)
{
  notInsuredCount = notInsuredCount + 1;
}

if (stockCar.insured === false)
{
  notInsuredCount = notInsuredCount + 1;
}

if (locomotive.insured === false)
{
  notInsuredCount = notInsuredCount + 1;
}

if (cattleCar.insured === false)
{
  notInsuredCount = notInsuredCount + 1;  
}

if (boxCar.insured === false)
{
  notInsuredCount = notInsuredCount + 1;
}

if (gondola.insured === false)
{
  notInsuredCount = notInsuredCount + 1;
}
console.log("Insurance: Total count of uninsured cars: " + notInsuredCount);

//Task 3: Total dollar amount spent on tankCars, stockCars, boxCars over 6500.00
// if the dollar amount spent on each ^ > 6500.00 add to total
let totalAmountCars = 0;
if (tankCar.pricePer >= 6500)
{
  let tankCarTotal = tankCar.pricePer * tankCar.quantity;
  totalAmountCars = totalAmountCars + tankCarTotal;
}

if (stockCar.pricePer >= 6500)
{
  let stockCarTotal = stockCar.pricePer * stockCar.quantity;
  totalAmountCars = totalAmountCars + stockCarTotal;
}

if (boxCar.pricePer >= 6500)
{
  let boxCarTotal = boxCar.pricePer * boxCar.quantity;
  totalAmountCars = totalAmountCars + boxCarTotal;
}

console.log("Purchasing: Total amount spent on cars: " + totalAmountCars);
