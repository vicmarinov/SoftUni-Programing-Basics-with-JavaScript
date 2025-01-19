function lunchBreak (seriesName, episodeDuration, breakTime) {
    let lunchTime = (1 / 8) * breakTime;
    let restTime = (1 / 4) * breakTime;

    let timeLeft = breakTime - lunchTime - restTime;

    let timeDifferance = Math.abs(timeLeft - episodeDuration);
    timeDifferance = Math.ceil(timeDifferance);

    if (timeLeft >= episodeDuration) {
        console.log(`You have enough time to watch ${seriesName} and left with ${timeDifferance} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${timeDifferance} more minutes.`)
    }
}

lunchBreak("Game of Thrones", 60, 96);
lunchBreak("Teen Wolf", 48, 60);