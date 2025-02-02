function trekkingMania (inputArray) {
    let groupsQuantity = Number(inputArray[0]);

    let peopleInGroupMusala = 0;
    let peopleInGroupMontBlanc = 0;
    let peopleInGroupKilimanjaro = 0;
    let peopleInGroupK2 = 0;
    let peopleInGroupMountEverest = 0;

    let peopleTotal = 0;

    for (let i = 1; i <= groupsQuantity; i++) {
        let people = Number(inputArray[i]);

        if (people <= 5) {
            peopleInGroupMusala += people;
            peopleTotal += people;
        } else if (people <= 12) {
            peopleInGroupMontBlanc += people;
            peopleTotal += people;
        } else if (people <= 25) {
            peopleInGroupKilimanjaro += people;
            peopleTotal += people;
        } else if (people <= 40) {
            peopleInGroupK2 += people;
            peopleTotal += people;
        } else {
            peopleInGroupMountEverest += people;
            peopleTotal += people;
        }
    }

    let percentageOfGroupMusala       = (peopleInGroupMusala       / peopleTotal) * 100;
    let percentageOfGroupMontBlanc    = (peopleInGroupMontBlanc    / peopleTotal) * 100;
    let percentageOfGroupKilimanjaro  = (peopleInGroupKilimanjaro  / peopleTotal) * 100;
    let percentageOfGroupK2           = (peopleInGroupK2           / peopleTotal) * 100;
    let percentageOfGroupMountEverest = (peopleInGroupMountEverest / peopleTotal) * 100;

    console.log(`${percentageOfGroupMusala.toFixed(2)}%`);
    console.log(`${percentageOfGroupMontBlanc.toFixed(2)}%`);
    console.log(`${percentageOfGroupKilimanjaro.toFixed(2)}%`);
    console.log(`${percentageOfGroupK2.toFixed(2)}%`);
    console.log(`${percentageOfGroupMountEverest.toFixed(2)}%`);
}

trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
trekkingMania(["5", "25", "41", "31", "250", "6"]);