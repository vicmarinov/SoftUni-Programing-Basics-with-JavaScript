function numbersDivisibleBy9 (start, end) {
    let numbersSum = 0;
    let numbersOutput = "";

    for (let i = start; i <= end; i++) {
        if (i % 9 === 0) {
            numbersSum += i;
            
            if (i + 9 > end) {
                numbersOutput += i;
            } else {
                numbersOutput += (i + "\n");
            }
        }
    }

    console.log(`The sum: ${numbersSum}`);
    console.log(numbersOutput);
}

numbersDivisibleBy9(100, 200);