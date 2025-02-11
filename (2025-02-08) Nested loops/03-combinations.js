function combinations (n) {
    // The function finds the number of combinations of 3 natural numbers (x1, x2, x3)
    // for which the equality x1 + x2 + x3 = n is satisfied.

    let validCombinations = 0;

    for (let x1 = 0; x1 <= n; x1++) {
        for (let x2 = 0; x2 <= n; x2++) {
            for (let x3 = 0; x3 <= n; x3++) {
                if (x1 + x2 + x3 === n) {
                    validCombinations++;
                }
            }
        }
    }

    console.log(validCombinations);
}

combinations(25);
combinations(20);
combinations(5);