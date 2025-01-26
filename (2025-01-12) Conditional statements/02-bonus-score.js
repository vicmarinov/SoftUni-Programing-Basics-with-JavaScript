function bonusScore (points) {
    let bonusPoints;

    if (points <= 100) {
        bonusPoints = 5;
    } else if (points <= 1000) {
        bonusPoints = 0.2 * points;
    } else {
        bonusPoints = 0.1 * points;
    }

    if (points % 2 === 0) {
        bonusPoints += 1;
    } else if (points % 10 === 5) {
        bonusPoints += 2;
    }

    console.log(bonusPoints);
    console.log(points + bonusPoints);
}

bonusScore(20);
bonusScore(175);
bonusScore(2703);
bonusScore(15875);