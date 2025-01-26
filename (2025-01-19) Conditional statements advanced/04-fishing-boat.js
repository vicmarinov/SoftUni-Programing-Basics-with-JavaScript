function fishingBoat (budget, season, fishermenNumber) {
    let rentalPrice;

    switch (season) {
        case "Spring":
            rentalPrice = 3000;
            break;

        case "Summer":
        case "Autumn":
            rentalPrice = 4200;
            break;
        
        case "Winter":
            rentalPrice = 2600;
            break;
    }

    if (fishermenNumber <= 6) {
        rentalPrice *= 0.9; // 10 % discount
    } else if (fishermenNumber <= 11) {
        rentalPrice *= 0.85; // 15 % discount
    } else {
        rentalPrice *= 0.75; // 25 % discount
    }

    if (fishermenNumber % 2 === 0 && season !== "Autumn") {
        rentalPrice *= 0.95; // 5 % additional discount
    }

    if (rentalPrice <= budget) {
        console.log(`Yes! You have ${(budget - rentalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(rentalPrice - budget).toFixed(2)} leva.`);
    }
}

fishingBoat(3000, "Summer", 11);
fishingBoat(3600, "Autumn", 6);
fishingBoat(2000, "Winter", 13);