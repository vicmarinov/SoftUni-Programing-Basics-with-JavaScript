function hotelRoom (month, stays) {
    let studioPrice;
    let apartmentPrice;

    switch (month) {
        case "May":
        case "October":
            studioPrice = stays * 50;
            apartmentPrice = stays * 65;

            if (stays > 14) {
                studioPrice *= 0.7; // 30 % discount
            } else if (stays > 7) {
                studioPrice *= 0.95; // 5 % discount
            }
            break;
        
        case "June":
        case "September":
            studioPrice = stays * 75.2;
            apartmentPrice = stays * 68.7;

            if (stays > 14) {
                studioPrice *= 0.8; // 20 % discount
            }
            break;
        
        case "July":
        case "August":
            studioPrice = stays * 76;
            apartmentPrice = stays * 77;
            break;
    }

    if (stays > 14) {
        apartmentPrice *= 0.9; // 10 % discount
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

hotelRoom("May", 15);
hotelRoom("June", 14);
hotelRoom("August", 20);