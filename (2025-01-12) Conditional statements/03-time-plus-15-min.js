function timePlus15Min (hours, minutes) {
    let minutesTotal = hours * 60 + minutes;
    minutesTotal += 15;

    let resultHours = Math.floor(minutesTotal / 60);
    let resultMinutes = minutesTotal % 60;

    if (resultHours === 24) {
        resultHours -= 24
    }

    if (resultMinutes < 10) {
        console.log(`${resultHours}:0${resultMinutes}`);
    } else {
        console.log(`${resultHours}:${resultMinutes}`);
    }
}

timePlus15Min(1, 46);
timePlus15Min(0, 1);
timePlus15Min(23, 59);
timePlus15Min(11, 8);
timePlus15Min(12, 49);