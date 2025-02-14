function equalSumsEvenOddPosition (numStart, numEnd) {
    let result = "";

    for (let num = numStart; num <= numEnd; num++) {
        let evenIndexDigitsSum = 0;
        let oddIndexDigitsSum = 0;
        
        let numAsString = String(num);

        for (let index = 0; index < numAsString.length; index++) {
            let digit = Number(numAsString[index]);

            if (index % 2 === 0) {
                evenIndexDigitsSum += digit;
            } else {
                oddIndexDigitsSum += digit;
            }
        }

        if (evenIndexDigitsSum === oddIndexDigitsSum) {
            result += numAsString + " ";
        }
    }

    console.log(result);
}

equalSumsEvenOddPosition(100000, 100050);
equalSumsEvenOddPosition(123456, 124000);
equalSumsEvenOddPosition(299900, 300000);
equalSumsEvenOddPosition(100115, 100120);