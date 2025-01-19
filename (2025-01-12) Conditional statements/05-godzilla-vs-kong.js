function godzillaVersusKong (budget, actorsNumber, costumePricePerActor) {
    let decorCost = budget * 0.1;
    let costumesCost = actorsNumber * costumePricePerActor;

    if (actorsNumber > 150) {
        costumesCost *= 0.9; // 10 % discount
    }

    let moneyDifference = Math.abs(budget - decorCost - costumesCost);
    moneyDifference = moneyDifference.toFixed(2);

    if (decorCost + costumesCost > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyDifference} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyDifference} leva left.`);
    }
}

godzillaVersusKong(20000, 120, 55.5);
godzillaVersusKong(15437.62, 186, 57.99);
godzillaVersusKong(9587.88, 222, 55.68);