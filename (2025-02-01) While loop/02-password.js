function password (inputArray) {
    let userName = inputArray[0];
    let userPassword = inputArray[1];

    let i = 2; // The first 2 elements of the inputArray are the userName and the userPassword,
               // and we iterate through the other elements.

    while (inputArray[i] !== userPassword) {
        i++;
    }

    console.log(`Welcome ${userName}!`);
}

password(["Nakov", "1234", "Pass", "1324", "1234"]);
password(["Gosho", "secret", "secret"]);