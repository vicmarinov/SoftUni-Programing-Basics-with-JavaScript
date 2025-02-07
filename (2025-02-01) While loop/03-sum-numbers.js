function sumNumbers (inputArray) {
    let sumDesired = Number(inputArray[0]);
    let sumAccumulated = 0;

    let i = 1; // The first element of the inputArray is sumDesired,
               // and we iterate through the other elements.
    
    while (sumAccumulated < sumDesired) {
        sumAccumulated += Number(inputArray[i]);
        i++;
    }

    console.log(sumAccumulated);
}

sumNumbers(["100", "10", "20", "30", "40"]);
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);