function walking (inputArray) {
    let stepsTotal = 0;
    let hasGoneHomeEarlier = false;

    let i = 0;
    
    let command = inputArray[i];
    i++;

    while (stepsTotal < 10000) {
        if (command === "Going home") {
            hasGoneHomeEarlier = true;
            break;
        }

        let steps = Number(command);
        stepsTotal += steps;

        command = inputArray[i];
        i++;
    }

    if (hasGoneHomeEarlier) {
        let steps = Number(inputArray[i]);
        stepsTotal += steps;
    }

    if (stepsTotal >= 10000) {
        console.log("Goal reached! Good job!");
        console.log(`${stepsTotal - 10000} steps over the goal!`);
    } else {
        console.log(`${10000 - stepsTotal} more steps to reach goal.`);
    }
}

walking(["1000", "1500", "2000", "6500"]);
walking(["1500", "300", "2500", "3000", "Going home", "200"]);
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
walking(["125", "250", "4000", "30", "2678", "4682"]);