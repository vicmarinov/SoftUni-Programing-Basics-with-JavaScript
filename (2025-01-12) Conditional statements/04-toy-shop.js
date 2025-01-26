function toyShop (tripPrice, puzzlesQuantity, dollsQuantity, teddyBearsQuantity, minionsQuantity, trucksQuantity) {
    // Price list
    // ----------
    // puzzle:       2.60 leva
    // talking doll: 3.00 leva
    // teddy bear:   4.10 leva
    // minion:       8.20 leva
    // truck:        2.00 leva

    let totalIncome = puzzlesQuantity * 2.6 + dollsQuantity * 3 + teddyBearsQuantity * 4.1 + minionsQuantity * 8.2 + trucksQuantity * 2;
    let totalQuantity = puzzlesQuantity + dollsQuantity + teddyBearsQuantity + minionsQuantity + trucksQuantity;

    if (totalQuantity >= 50) {
        totalIncome *= 0.75; // 25 % discount
    }

    totalIncome *= 0.9; // 10 % for rent

    if (totalIncome >= tripPrice) {
        console.log(`Yes! ${(totalIncome - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - totalIncome).toFixed(2)} lv needed.`);
    }
}

toyShop(40.8, 20, 25, 30, 50, 10);
toyShop(320, 8, 2, 5, 5, 1);