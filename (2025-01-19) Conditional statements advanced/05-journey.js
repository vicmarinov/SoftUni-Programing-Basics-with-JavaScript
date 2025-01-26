function journey (budget, season) {
    let destination;
    let accommodation;
    let expenses;

    if (budget <= 100) {
        destination = "Bulgaria";

        switch (season) {
            case "summer":
                accommodation = "Camp";
                expenses = budget * 0.3;
                break;

            case "winter":
                accommodation = "Hotel";
                expenses = budget * 0.7;
                break;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        
        switch (season) {
            case "summer":
                accommodation = "Camp";
                expenses = budget * 0.4;
                break;

            case "winter":
                accommodation = "Hotel";
                expenses = budget * 0.8;
                break;
        }
    } else {
        destination = "Europe";
        accommodation = "Hotel";
        expenses = budget * 0.9;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${accommodation} - ${expenses.toFixed(2)}`);
}

journey(50, "summer");
journey(75, "winter");
journey(312, "summer");
journey(678.53, "winter");
journey(1500, "summer");