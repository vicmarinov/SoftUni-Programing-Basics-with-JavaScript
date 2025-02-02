function salary (inputArray) {
    let tabsQuantity = inputArray[0];
    let salaryAmount = inputArray[1];

    for (let i = 2; i <= tabsQuantity + 1; i++) {
        let tab = inputArray[i];
        
        switch (tab) {
            case "Facebook":  salaryAmount -= 150; break;
            case "Instagram": salaryAmount -= 100; break;
            case "Reddit":    salaryAmount -= 50;  break;
        }
    }

    if (salaryAmount <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(Math.round(salaryAmount));
    }
}

salary([10, 750, "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);
salary([3, 500, "Github.com", "Stackoverflow.com", "softuni.bg"]);
salary([3, 500, "Facebook", "Stackoverflow.com", "softuni.bg"]);