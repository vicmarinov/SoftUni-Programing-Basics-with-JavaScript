function coins (change) {
    let allCoinDenominations = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    
    let quantityOfCoinsInChange = 0;

    let i = 0;

    while (change !== 0) {
        let coinDenomination = allCoinDenominations[i];
        let coinsNeeded = Math.floor(change / coinDenomination);

        quantityOfCoinsInChange += coinsNeeded;
        change -= coinDenomination * coinsNeeded;

        change = Math.round(change * 100) / 100; // avoids floating-point error

        i++;
    }

    console.log(quantityOfCoinsInChange);
}

coins(1.23);
coins(2);
coins(0.56);
coins(2.73);