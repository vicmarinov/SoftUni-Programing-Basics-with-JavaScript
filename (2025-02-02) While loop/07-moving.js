function moving (inputArray) {
    let freeSpaceWidth = Number(inputArray[0]); // in meters
    let freeSpaceLength = Number(inputArray[1]); // in meters
    let freeSpaceHeight = Number(inputArray[2]); // in meters

    let freeSpaceVolume = freeSpaceWidth * freeSpaceLength * freeSpaceHeight; // in cubic meters

    // According to the condition of the problem, a box has dimensions
    // of 1 m x 1 m x 1 m, that is, with a volume of 1 cubic meter.

    let i = 3;

    let command = inputArray[i];
    i++;

    while (command !== "Done") {
        let boxesQuantity = Number(command);
        freeSpaceVolume -= boxesQuantity;

        if (freeSpaceVolume < 0) {
            console.log(`No more free space! You need ${Math.abs(freeSpaceVolume)} Cubic meters more.`);
            break;
        }

        command = inputArray[i];
        i++;
    }

    if (command === "Done") {
        console.log(`${freeSpaceVolume} Cubic meters left.`);
    }
}

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
moving(["10", "1", "2", "4", "6", "Done"]);