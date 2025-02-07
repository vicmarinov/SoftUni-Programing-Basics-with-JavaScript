function readText (inputArray) {
    let i = 0;

    while (inputArray[i] !== "Stop") {
        console.log(inputArray[i]);
        i++;
    }
}

readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);
readText(["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop", "AfterStop"]);