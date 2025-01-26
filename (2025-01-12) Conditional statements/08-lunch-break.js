function lunchBreak (seriesName, episodeDuration, breakTime) {
    let lunchTime = (1 / 8) * breakTime;
    let restTime = (1 / 4) * breakTime;

    let timeLeft = breakTime - lunchTime - restTime;

    let timeDifference = Math.abs(timeLeft - episodeDuration);
    timeDifference = Math.ceil(timeDifference);

    if (timeLeft >= episodeDuration) {
        console.log(`You have enough time to watch ${seriesName} and left with ${timeDifference} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${timeDifference} more minutes.`)
    }
}

lunchBreak("Game of Thrones", 60, 96);
lunchBreak("Teen Wolf", 48, 60);