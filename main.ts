#!/usr/bin/env node
import inquirer from "inquirer";

const currency = {
    USD : 1,
    TRY : 32.06,
    PKR : 275.15,
    AUD : 1.513,
    AZN : 1.70,
    BHD : 0.76,
    CAD : 1.35,
    INR : 83.27,
}

let userAns = await inquirer.prompt([
    {
        message: "Enter from currency",
        name: "from",
        type: "list",
        choices: ["USD","TRY","PKR","AUD","AZN","BHD","CAD","INR"] 
    }, {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD","TRY","PKR","AUD","AZN","BHD","CAD","INR"]
    }, {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    } 
]);
console.log(userAns);
let fromAmount = currency[userAns.from];
let toAmount = currency[userAns.to];
let amount =  userAns.amount;
let baseAmount= amount/fromAmount;
let convertedAmount= baseAmount * toAmount;
console.log(`convertedAmount: ${convertedAmount.toFixed(3)}`);

