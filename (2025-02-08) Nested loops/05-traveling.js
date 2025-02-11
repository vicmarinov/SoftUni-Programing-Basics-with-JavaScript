function traveling (inputArray) {
    let i = 0;

    let command = inputArray[i];
    i++;

    while (command !== "End") {
        let destination = command;
        let minBudgetNeeded = Number(inputArray[i]);
        i++;

        let savings = 0;

        while (savings < minBudgetNeeded) {
            let saving = Number(inputArray[i]);
            i++;

            savings += saving;
        }

        console.log(`Going to ${destination}!`);

        command = inputArray[i];
        i++;
    }
}