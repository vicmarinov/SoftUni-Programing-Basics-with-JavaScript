function specialNumbers (inputNum) {
    let result = "";

    for (let num = 1111; num <= 9999; num++) {
        let numAsString = String(num);
        let isSpecialNum = true;

        for (let i = 0; i < numAsString.length; i++) {
            let digit = Number(numAsString[i]);

            if (inputNum % digit !== 0) {
                isSpecialNum = false;
            }
        }

        if (isSpecialNum) {
            result += num + " ";
        }
    }

    console.log(result);
}

specialNumbers(3);
specialNumbers(11);
specialNumbers(16);