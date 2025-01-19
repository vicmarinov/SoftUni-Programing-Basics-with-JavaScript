function sumSeconds (seconds1, seconds2, seconds3) {
    let secondsTotal = seconds1 + seconds2 + seconds3;

    let resultMinutes = Math.floor(secondsTotal / 60);
    let resultSeconds = secondsTotal % 60;

    if (resultSeconds < 10) {
        console.log(`${resultMinutes}:0${resultSeconds}`);
    } else {
        console.log(`${resultMinutes}:${resultSeconds}`);
    }
}

sumSeconds(35, 45, 44);
sumSeconds(22, 7, 34);
sumSeconds(50, 50, 49);
sumSeconds(14, 12, 10);