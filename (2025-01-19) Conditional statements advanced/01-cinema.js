function cinema(projectionType, seatsRows, seatsColumns) {
    let seatsTotal = seatsRows * seatsColumns;
    
    let income = 0;

    switch (projectionType) {
        case "Premiere":
            income = seatsTotal * 12;
            break;
        
        case "Normal":
            income = seatsTotal * 7.5;
            break;
        
        case "Discount":
            income = seatsTotal * 5;
            break;
    }

    console.log(`${income.toFixed(2)} leva`);
}

cinema("Premiere", 10, 12);
cinema("Normal", 21, 13);
cinema("Discount", 12, 30);