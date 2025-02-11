function building (numberOfFloors, numberOfRoomsPerFloor) {
    for (let floor = numberOfFloors; floor >= 1; floor--) {
        let outputRow = "";

        for (let room = 0; room < numberOfRoomsPerFloor; room++) {
            if (floor === numberOfFloors) {
                outputRow += `L${floor}${room} `;
            } else if (floor % 2 === 0) {
                outputRow += `O${floor}${room} `;
            } else {
                outputRow += `A${floor}${room} `
            }
        }

        console.log(outputRow);
    }
}

building(6, 4);
building(9, 5);
building(4, 4);