function skiTrip (daysOfStay, accommodationType, feedback) {
    let stays = daysOfStay - 1;
    
    let totalExpenses;

    switch (accommodationType) {
        case "room for one person":
            totalExpenses = stays * 18;
            break;
        
        case "apartment":
            totalExpenses = stays * 25;

            if (stays < 10) {
                totalExpenses *= 0.7; // 30 % discount
            } else if (stays <= 15) {
                totalExpenses *= 0.65; // 35 % discount
            } else {
                totalExpenses *= 0.5; // 50 % discount
            }
            break;
        
        case "president apartment":
            totalExpenses = stays * 35;

            if (stays < 10) {
                totalExpenses *= 0.9; // 10 % discount
            } else if (stays <= 15) {
                totalExpenses *= 0.85; // 15 % discount
            } else {
                totalExpenses *= 0.8; // 20 % discount
            }
            break;
    }

    if (feedback === "positive") {
        totalExpenses *= 1.25; // 25 % tip
    } else if (feedback === "negative") {
        totalExpenses *= 0.9; // 10 % decrease
    }

    console.log(totalExpenses.toFixed(2));
}

skiTrip(14, "apartment", "positive");
skiTrip(30, "president apartment", "negative");
skiTrip(12, "room for one person", "positive");
skiTrip(2, "apartment", "positive");