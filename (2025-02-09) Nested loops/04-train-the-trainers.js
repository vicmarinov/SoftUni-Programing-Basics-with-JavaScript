// According to the statement of the problem, a student presents several presentations
// to a jury. Each member of the jury gives their own grade for each presentation. The
// grade for each presentation is the arithmetic mean of the grades given by each member
// of the jury. The grade for the entire course is the arithmetic mean of the grades
// for all presentations."

function trainTheTrainers (inputArray) {
    let juryMembers = Number(inputArray[0]);

    let courseGradesSum = 0;
    let courseGradesQuantity = 0;

    let index = 1; // The first element of the inputArray is juryMembers,
                   // and we iterate through the other elements.

    let command = inputArray[index];
    index++;

    while (command !== "Finish") {
        let presentationTitle = command;
        let presentationGradesSum = 0;
        let presentationGradesQuantity = 0;

        for (let juryMember = 1; juryMember <= juryMembers; juryMember++) {
            let juryMemberGrade = Number(inputArray[index]);
            index++;

            presentationGradesSum += juryMemberGrade;
            presentationGradesQuantity++;
        }

        let presentationGrade = presentationGradesSum / presentationGradesQuantity;
        console.log(`${presentationTitle} - ${presentationGrade.toFixed(2)}.`);

        courseGradesSum += presentationGrade;
        courseGradesQuantity++;

        command = inputArray[index];
        index++;
    }

    let courseGrade = courseGradesSum / courseGradesQuantity;
    console.log(`Student's final assessment is ${courseGrade.toFixed(2)}.`);
}

trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
trainTheTrainers(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]);
trainTheTrainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"]);