function accountBalance (accountOperations) {
    let balance = 0;

    let i = 0;

    while (accountOperations[i] !== "NoMoreMoney") {
        let increase = Number(accountOperations[i]);

        if (accountOperations[i] < 0) {
            console.log("Invalid operation!");
            break;
        }

        console.log(`Increase: ${increase.toFixed(2)}`);
        balance += increase;

        i++;
    }

    console.log(`Total: ${balance.toFixed(2)}`);
}

accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
accountBalance(["120", "45.55", "-150"]);