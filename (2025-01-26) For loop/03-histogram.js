function histogram (inputArray) {
    let numbersQuantity = inputArray[0];

    let numbersInRange1 = 0;
    let numbersInRange2 = 0;
    let numbersInRange3 = 0;
    let numbersInRange4 = 0;
    let numbersInRange5 = 0;

    for (let i = 1; i <= numbersQuantity; i++) {
        let number = inputArray[i];

        if (number < 200) {
            numbersInRange1++;
        } else if (number < 400) {
            numbersInRange2++;
        } else if (number < 600) {
            numbersInRange3++;
        } else if (number < 800) {
            numbersInRange4++;
        } else {
            numbersInRange5++;
        }
    }

    let percentageOfRange1 = (numbersInRange1 / numbersQuantity) * 100;
    let percentageOfRange2 = (numbersInRange2 / numbersQuantity) * 100;
    let percentageOfRange3 = (numbersInRange3 / numbersQuantity) * 100;
    let percentageOfRange4 = (numbersInRange4 / numbersQuantity) * 100;
    let percentageOfRange5 = (numbersInRange5 / numbersQuantity) * 100;

    console.log(`${percentageOfRange1.toFixed(2)}%`);
    console.log(`${percentageOfRange2.toFixed(2)}%`);
    console.log(`${percentageOfRange3.toFixed(2)}%`);
    console.log(`${percentageOfRange4.toFixed(2)}%`);
    console.log(`${percentageOfRange5.toFixed(2)}%`);
}

histogram([3, 1, 2, 999]);
histogram([7, 800, 801, 250, 199, 399, 599, 799])
histogram([9, 367, 99, 200, 799, 999, 333, 555, 111, 9])
histogram([14, 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200]);