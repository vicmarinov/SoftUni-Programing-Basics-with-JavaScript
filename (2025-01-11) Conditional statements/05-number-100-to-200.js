function numBetween100And200 (num) {
    if (num < 100) {
        console.log("Less than 100");
    } else if (num <= 200) {
        console.log("Between 100 and 200");
    } else {
        console.log("Greater than 200");
    }
}

numBetween100And200(95);
numBetween100And200(120);
numBetween100And200(210);