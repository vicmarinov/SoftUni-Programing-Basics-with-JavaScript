function sumPrimeNonPrime (inputArray) {
    let primeNumbersSum = 0;
    let nonPrimeNumbersSum = 0;

    let index = 0;

    let command = inputArray[index];
    index++;

    while (command !== "stop") {
        let number = Number(command);
        let isPrimeNumber = true;

        if (number < 0) {
            console.log("Number is negative.");

            command = inputArray[index];
            index++;

            continue;
        }

        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrimeNumber = false;
            }
        }

        if (isPrimeNumber) {
            primeNumbersSum += number;
        } else {
            nonPrimeNumbersSum += number;
        }

        command = inputArray[index];
        index++;
    }

    console.log(`Sum of all prime numbers is: ${primeNumbersSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNumbersSum}`);
}

sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);
sumPrimeNonPrime(["0", "-9", "0", "stop"]);