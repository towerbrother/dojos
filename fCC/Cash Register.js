/*

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency    Unit    Amount
Penny       $0.01   (PENNY)
Nickel	    $0.05   (NICKEL)
Dime	      $0.1    (DIME)
Quarter	    $0.25   (QUARTER)
Dollar	    $1      (DOLLAR)
Five      	$5      (FIVE)
Ten       	$10     (TEN)
Twenty    	$20     (TWENTY)
One-hundred $100    (ONE HUNDRED)

*/

const resultStatus = {
  open: "OPEN",
  closed: "CLOSED",
  insufficientFunds: "INSUFFICIENT_FUNDS",
};

function getChangeAvailable(changeInDrawer) {
  let total = 0;
  let length = changeInDrawer.length;
  for (let i = 0; i < length; i++) {
    total += changeInDrawer[i][1];
  }
  return total.toFixed(2);
}

function getOverallRegisterStatus(changeDue, changeAvailable) {
  if (Number(changeDue) > Number(changeAvailable)) {
    return "INSUFFICIENT_FUNDS";
  }

  if (Number(changeDue) < Number(changeAvailable)) {
    return "OPEN";
  }

  return "CLOSED";
}

function getCustomerChange(changeDue, changeInDrawer) {
  let change = [];
  const units = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1.0],
    ["FIVE", 5.0],
    ["TEN", 10.0],
    ["TWENTY", 20.0],
    ["ONE HUNDRED", 100.0],
  ];

  const length = changeInDrawer.length;
  for (let i = length - 1; i >= 0; i--) {
    const currencyName = changeInDrawer[i][0];
    const currencyTotalAvailable = changeInDrawer[i][1];
    const currencyUnitValue = units[i][1];
    let currencyAmountAvailable = currencyTotalAvailable / currencyUnitValue;
    let currencyToReturn = 0;

    while (changeDue >= currencyUnitValue && currencyAmountAvailable > 0) {
      changeDue -= currencyUnitValue;
      changeDue = Number(changeDue.toFixed(2));
      currencyAmountAvailable--;
      currencyToReturn++;
    }

    if (currencyToReturn > 0) {
      change.push([currencyName, currencyToReturn * currencyUnitValue]);
    }
  }

  if (changeDue != 0) {
    change = [];
    return change;
  }

  return change;
}

function checkCashRegister(price, cash, cid) {
  let result = { status: "", change: [] };
  let changeDue = parseFloat(cash - price).toFixed(2);
  let changeAvailable = getChangeAvailable(cid);

  if (changeDue < 0) return "Cash not sufficient ma'am!";

  result.status = getOverallRegisterStatus(changeDue, changeAvailable);

  if (result.status === resultStatus.insufficientFunds) {
    return result;
  }

  result.change = getCustomerChange(changeDue, cid);

  if (result.status === "OPEN" && result.change.length === 0) {
    result.status = resultStatus.insufficientFunds;
    return result;
  }

  return result;
}

checkCashRegister(19.5, 25, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
