function newHouse (flowersType, flowersQuantity, budget) {
    let totalCost;

    switch (flowersType) {
        case "Roses":
            totalCost = flowersQuantity * 5;

            if (flowersQuantity > 80) {
                totalCost *= 0.9; // 10 % discount
            }
            break;
        
        case "Dahlias":
            totalCost = flowersQuantity * 3.8;

            if (flowersQuantity > 90) {
                totalCost *= 0.85; // 15 % discount
            }
            break;
        
        case "Tulips":
            totalCost = flowersQuantity * 2.8;

            if (flowersQuantity > 80) {
                totalCost *= 0.85; // 15 % discount
            }
            break;
        
        case "Narcissus":
            totalCost = flowersQuantity * 3;

            if (flowersQuantity < 120) {
                totalCost *= 1.15; // 15 % price increase
            }
            break;
        
        case "Gladiolus":
            totalCost = flowersQuantity * 2.5;

            if (flowersQuantity < 80) {
                totalCost *= 1.2; // 20 % price increase
            }
            break;
    }

    if (totalCost <= budget) {
        console.log(`Hey, you have a great garden with ${flowersQuantity} ${flowersType} and ${(budget - totalCost).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(totalCost - budget).toFixed(2)} leva more.`);
    }
}

newHouse("Roses", 55, 250);
newHouse("Tulips", 88, 260);
newHouse("Narcissus", 119, 360);