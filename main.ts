#! /usr/bin/env node
import inquirer from "inquirer"

let myBalance = 10000; //Dollar
let myPin = 8080;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your PIN: ",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct pin code!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select an option",
      type: "list",
      choices: ["Withdraw", "Check-balance", "Fast Cash"],
    },
  ]);

  if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "How much do you want to withdraw?",
        type: "number",
      },
    ]);

    if (amountAns.amount > myBalance) {
      console.log("Insufficient Balance");
    } else  if (amountAns.amount < myBalance) {
      myBalance -= amountAns.amount;
      console.log("Your remaining balance is: " + myBalance);
    }
  } else if (operationAns.operation === "Check-balance") {
    console.log(`Your current account balance is  ${myBalance}`);
  }
  else if (operationAns.operation === "Fast Cash"){
    let cashAns = await inquirer.prompt(
        {
            name: "cash",
            type: "list",
            message: "Enter your amount",
            choices: ["100", "500", "1000", "5000"],
        }
    );
    if (cashAns.cash == 100 ||
      cashAns.cash == 500 ||
      cashAns.cash == 1000 ||
      cashAns.cash == 5000) {
      let cash = myBalance - cashAns.cash;
      console.log(`Your remaining balance is: ${cash}`);
  }
  }
  
} else {
  console.log("Sorry! Incorrect pin number");
}
