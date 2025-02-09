function cake (inputArray) {
    let cakeWidth = Number(inputArray[0]); // in centimeters
    let cakeLength = Number(inputArray[1]); // in centimeters
    
    let cakeArea = cakeWidth * cakeLength; // in square centimeters

    // According to the condition of the problem, one piece of the cake
    // has dimensions of 1 cm by 1 cm, that is, with an area of ​​1 sq. cm.

    let i = 2;
    
    let command = inputArray[i];
    i++;

    while (command !== "STOP") {
        let takenPieces = Number(command);
        cakeArea -= takenPieces;

        if (cakeArea < 0) {
            console.log(`No more cake left! You need ${Math.abs(cakeArea)} pieces more.`);
            break;
        }

        command = inputArray[i];
        i++;
    }

    if (command === "STOP") {
        console.log(`${cakeArea} pieces are left.`);
    }
}

cake(["10", "10", "20", "20", "20", "20", "21"]);
cake(["10", "2", "2", "4", "6", "STOP"]);