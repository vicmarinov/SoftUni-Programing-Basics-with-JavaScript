function multiplicationTable () {
    for (let multiplier = 1; multiplier <= 10; multiplier++) {
        for (let multiplicand = 1; multiplicand <= 10; multiplicand++) {
            console.log(`${multiplier} * ${multiplicand} = ${multiplier * multiplicand}`);
        }
    }
}

multiplicationTable();