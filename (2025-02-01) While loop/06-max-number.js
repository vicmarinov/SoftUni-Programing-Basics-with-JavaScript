function maxNumber (numbers) {
    let max = Number.MIN_SAFE_INTEGER;
    
    let i = 0;

    while (numbers[i] !== "Stop") {
        let number = Number(numbers[i]);

        if (number > max) {
            max = number;
        }

        i++;
    }

    console.log(max);
}

maxNumber(["100", "99", "80", "70", "Stop"]);
maxNumber(["-10", "20", "-30", "Stop"]);
maxNumber(["45", "-20", "7", "99", "Stop"]);
maxNumber(["999", "Stop"]);
maxNumber(["-1", "-2", "Stop"]);