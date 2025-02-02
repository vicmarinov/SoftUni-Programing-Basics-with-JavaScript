function tennisRanklist (inputArray) {
    let tournamentsQuantity = Number(inputArray[0]);
    let pointsInitial = Number(inputArray[1]);

    let pointsNew = 0;
    let tournamentsWon = 0;

    for (let i = 2; i <= tournamentsQuantity + 1; i++) {
        switch (inputArray[i]) {
            case "W":  pointsNew += 2000;
                       tournamentsWon++;  break;
            case "F":  pointsNew += 1200; break;
            case "SF": pointsNew += 720;  break;
        }
    }

    console.log(`Final points: ${pointsInitial + pointsNew}`);
    console.log(`Average points: ${Math.floor(pointsNew / tournamentsQuantity)}`);
    console.log(`${((tournamentsWon / tournamentsQuantity) * 100).toFixed(2)}%`);
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);
tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);