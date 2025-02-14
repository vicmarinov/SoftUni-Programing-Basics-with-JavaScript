function worldSwimmingRecord (worldRecordInSeconds, distanceInMeters, secondsPer1MeterSwum) {
    let secondsSwum = distanceInMeters * secondsPer1MeterSwum;

    let delaySeconds = Math.floor(distanceInMeters / 15) * 12.5; // 12.5 seconds delay per meter
    secondsSwum += delaySeconds;

    if (secondsSwum < worldRecordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${secondsSwum.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(secondsSwum - worldRecordInSeconds).toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord(10464, 1500, 20);
worldSwimmingRecord(55555.67, 3017, 5.03);