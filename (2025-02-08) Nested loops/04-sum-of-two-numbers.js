function sumOfTwoNumbers (start, end, magicNumber) {
    let combinationsChecked = 0;
    let validCombinationFound = false;

    for (let num1 = start; num1 <= end; num1++) {
        for (let num2 = start; num2 <= end; num2++) {
            combinationsChecked++;

            if (num1 + num2 === magicNumber) {
                console.log(`Combination N:${combinationsChecked} (${num1} + ${num2} = ${magicNumber})`);
                validCombinationFound = true;
                break;
            }
        }

        if (validCombinationFound) {
            break;
        }
    }

    if (!validCombinationFound) {
        console.log(`${combinationsChecked} combinations - neither equals ${magicNumber}`);
    }
}

sumOfTwoNumbers(1, 10, 5);
sumOfTwoNumbers(88, 888, 1000);
sumOfTwoNumbers(23, 24, 20);
sumOfTwoNumbers(88, 888, 2000);