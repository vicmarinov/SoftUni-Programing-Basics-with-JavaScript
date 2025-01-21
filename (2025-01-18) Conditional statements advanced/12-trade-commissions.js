function tradeCommissions (city, salesVolume) {
    switch (city) {
        case "Sofia":
            if (salesVolume > 10000) {
                console.log((salesVolume * 0.12).toFixed(2));
            } else if (salesVolume > 1000) {
                console.log((salesVolume * 0.08).toFixed(2));
            } else if (salesVolume > 500) {
                console.log((salesVolume * 0.07).toFixed(2));
            } else if (salesVolume >= 0) {
                console.log((salesVolume * 0.05).toFixed(2));
            } else {
                console.log("error");
            }
            break;
        case "Varna":
            if (salesVolume > 10000) {
                console.log((salesVolume * 0.13).toFixed(2));
            } else if (salesVolume > 1000) {
                console.log((salesVolume * 0.1).toFixed(2));
            } else if (salesVolume > 500) {
                console.log((salesVolume * 0.075).toFixed(2));
            } else if (salesVolume >= 0) {
                console.log((salesVolume * 0.045).toFixed(2));
            } else {
                console.log("error");
            }
            break;
        case "Plovdiv":
            if (salesVolume > 10000) {
                console.log((salesVolume * 0.145).toFixed(2));
            } else if (salesVolume > 1000) {
                console.log((salesVolume * 0.12).toFixed(2));
            } else if (salesVolume > 500) {
                console.log((salesVolume * 0.08).toFixed(2));
            } else if (salesVolume >= 0) {
                console.log((salesVolume * 0.055).toFixed(2));
            } else {
                console.log("error");
            }
            break;
        default:
            console.log("error");
            break;
    }
}

tradeCommissions("Sofia", 1500);
tradeCommissions("Plovdiv", 499.99);
tradeCommissions("Varna", 3874.5);
tradeCommissions("Kaspichan", -50);