function graduation (inputArray) {
    let studentName = inputArray[0];
    let hasRepeatedGrade = false;
    let isExcluded = false;
    
    let grade = 1;
    let marksSum = 0;

    let i = 1; // The first element of the inputArray is the studentName,
               // and we iterate through the other elements.
    
    while (grade <= 12) {
        let mark = Number(inputArray[i]);

        if (mark < 4) {
            hasRepeatedGrade = true;
        } else if (hasRepeatedGrade) {
            console.log(`${studentName} has been excluded at ${grade} grade`);
            isExcluded = true;
            break;
        } else {
            marksSum += mark;
            grade++;
        }

        i++;
    }

    if (!isExcluded) {
        markAverage = marksSum / 12; // There are 12 grades in the school
        console.log(`${studentName} graduated. Average grade: ${markAverage.toFixed(2)}`);
    }
}

graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);