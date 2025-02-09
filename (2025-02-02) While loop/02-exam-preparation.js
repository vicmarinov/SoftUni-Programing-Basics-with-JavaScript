function examPreparation (inputArray) {
    let maxNumOfBadGrades = Number(inputArray[0]);
    let badGradesQuantity = 0;
    let allGradesQuantity = 0;
    let allGradesSum = 0;
    let problemName;

    let i = 1; // The first element of the inputArray is maxNumOfBadGrades,
               // and we iterate through the other elements.
    
    let command = inputArray[i];
    i++;

    while (command !== "Enough") {
        problemName = command;
        let grade = Number(inputArray[i]);
        i++;

        if (grade <= 4) {
            badGradesQuantity++;
        }
        
        if (badGradesQuantity === maxNumOfBadGrades) {
            console.log(`You need a break, ${badGradesQuantity} poor grades.`);
            break;
        }

        allGradesQuantity++;
        allGradesSum += grade;


        command = inputArray[i];
        i++;
    }

    if (command === "Enough") {
        console.log(`Average score: ${(allGradesSum / allGradesQuantity).toFixed(2)}`);
        console.log(`Number of problems: ${allGradesQuantity}`);
        console.log(`Last problem: ${problemName}`);
    }
}

examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);