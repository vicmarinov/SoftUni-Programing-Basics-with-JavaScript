function cleverLily (age, washingMachinePrice, toyPrice) {
    let money = 0;
    let toys = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            money += 10 * (i / 2);
            money--;
        } else {
            toys++;
        }
    }

    money += toys * toyPrice;

    if (money >= washingMachinePrice) {
        console.log(`Yes! ${(money - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - money).toFixed(2)}`);
    }
}

cleverLily(10, 170, 6);
cleverLily(21, 1570.98, 3);