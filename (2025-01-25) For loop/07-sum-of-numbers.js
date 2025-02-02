function sumOfNumbers (numberAsString) {
    let digitsSum = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        let digit = Number(numberAsString[i]);
        digitsSum += digit;
    }

    console.log(`The sum of the digits is:${digitsSum}`);
}

sumOfNumbers("1234");
sumOfNumbers("564891");



// A more thoughtful solution
// --------------------------

// function sumOfNumbers (num) {
//     let numberAsString = String(num);
//     let digitsSum = 0;

//     for (let i = 0; i < numberAsString.length; i++) {
//         let digit = Number(numberAsString[i]);
//         digitsSum += digit;
//     }

//     console.log(`The sum of the digits is:${digitsSum}`);
// }

// sumOfNumbers(1234);
// sumOfNumbers(564891);



// An even more thoughtful solution
// --------------------------------

// function sumOfNumbers (num) {
//     let digitsSum = 0;

//     while (num > 0) {
//         let lastDigit = num % 10;
//         digitsSum += lastDigit;
//         num = (num - lastDigit) / 10;
//     }
    
//     console.log(`The sum of the digits is:${digitsSum}`);
// }

// sumOfNumbers(1234);
// sumOfNumbers(564891);