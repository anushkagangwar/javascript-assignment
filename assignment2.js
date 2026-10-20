
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your bill amount: ", (billInput) => {
    rl.question("Enter tip percentage: ", (tipInput) => {

        const billAmount = Number(billInput);
        const tipPercentage = Number(tipInput);

        const tipAmount = billAmount * tipPercentage / 100;

        let totalAmount = billAmount;
        totalAmount += tipAmount;

        console.log("Subtotal: $" + billAmount);
        console.log("Tip Percentage: " + tipPercentage + "%");
        console.log("Calculated Tip: $" + tipAmount);
        console.log("Total Amount to Pay: $" + totalAmount);

        rl.close();
    });
});
