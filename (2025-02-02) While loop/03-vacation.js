function vacation (inputArray) {
    let vacationCost = Number(inputArray[0]);
    let savings = Number(inputArray[1]);

    let daysTotal = 0;
    let daysSpendingInARow = 0;
    let isSpendingInARowTooMuch = false;

    let i = 2; // The first 2 elements of the inputArray are the vacationCost and the savings,
               // and we iterate through the other elements.
    
    let command = inputArray[i];
    i++;

    while (savings < vacationCost) {
        let commandSum = Number(inputArray[i]);
        i++;

        switch (command) {
            case "save":
                savings += commandSum;
                daysSpendingInARow = 0;
                break;
            case "spend":
                savings -= commandSum;
                savings = savings < 0 ? 0 : savings;
                daysSpendingInARow++;
                break;
        }

        daysTotal++;

        if (daysSpendingInARow === 5) {
            console.log("You can't save the money.");
            console.log(`${daysTotal}`);
            isSpendingInARowTooMuch = true;
            break;
        }

        command = inputArray[i];
        i++;
    }

    if (!isSpendingInARowTooMuch) {
        console.log(`You saved the money for ${daysTotal} days.`)
    }
}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);
vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);