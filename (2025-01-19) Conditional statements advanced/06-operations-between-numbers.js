function operationsBetweenNumbers (num1, num2, operator) {
    let result;
    let evenOrOdd;

    switch (operator) {
        case "+":
            result = num1 + num2;
            evenOrOdd = result % 2 === 0 ? "even" : "odd";
            console.log(`${num1} + ${num2} = ${result} - ${evenOrOdd}`);
            break;
        
        case "-":
            result = num1 - num2;
            evenOrOdd = result % 2 === 0 ? "even" : "odd";
            console.log(`${num1} - ${num2} = ${result} - ${evenOrOdd}`);
            break;
        
        case "*":
            result = num1 * num2;
            evenOrOdd = result % 2 === 0 ? "even" : "odd";
            console.log(`${num1} * ${num2} = ${result} - ${evenOrOdd}`);
            break;
        
        case "/":
            if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`);
                return;
            }

            result = num1 / num2;
            console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
            break;
        
        case "%":
            if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`);
                return;
            }

            result = num1 % num2;
            console.log(`${num1} % ${num2} = ${result}`);
            break;
    }
}

operationsBetweenNumbers(10, 12, "+");
operationsBetweenNumbers(123, 12, "/");
operationsBetweenNumbers(112, 0, "/");
operationsBetweenNumbers(10, 1, "-");
operationsBetweenNumbers(10, 3, "%");
operationsBetweenNumbers(10, 0, "%");
operationsBetweenNumbers(7, 3, "*");