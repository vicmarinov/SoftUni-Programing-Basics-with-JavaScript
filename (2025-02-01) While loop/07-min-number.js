function minNumber (numbers) {
    let min = Number.MAX_SAFE_INTEGER;
    
    let i = 0;

    while (numbers[i] !== "Stop") {
        let number = Number(numbers[i]);

        if (number < min) {
            min = number;
        }

        i++;
    }

    console.log(min);
}

minNumber(["100", "99", "80", "70", "Stop"]);
minNumber(["-10", "20", "-30", "Stop"]);
minNumber(["45", "-20", "7", "99", "Stop"]);
minNumber(["999", "Stop"]);
minNumber(["-1", "-2", "Stop"]);