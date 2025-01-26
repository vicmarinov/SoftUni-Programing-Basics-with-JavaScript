function onTimeForTheExam (examHour, examMinute, arrivalHour, arrivalMinute) {
    let examTimeInMinutes = examHour * 60 + examMinute;
    let arrivalTimeInMinutes = arrivalHour * 60 + arrivalMinute;
    
    let timeDifference =  examTimeInMinutes - arrivalTimeInMinutes;
    let arrivalType;

    if (timeDifference >= 0 && timeDifference <= 30) {
        arrivalType = "On time";
        console.log(arrivalType);
    } else if (timeDifference > 30) {
        arrivalType = "Early";
        console.log(arrivalType);
    } else {
        arrivalType = "Late";
        console.log(arrivalType);
    }

    let differenceHours;
    let differenceMinutes;

    if (arrivalTimeInMinutes !== examTimeInMinutes && arrivalType === "Late") {
        timeDifference = Math.abs(timeDifference);
        differenceHours = Math.floor(timeDifference / 60);
        differenceMinutes = timeDifference % 60;

        if (differenceHours === 0) {
            console.log(`${differenceMinutes} minutes after the start`);
        } else if (differenceMinutes < 10) {
            console.log(`${differenceHours}:0${differenceMinutes} hours after the start`);
        } else {
            console.log(`${differenceHours}:${differenceMinutes} hours after the start`);
        }
    } else if (arrivalTimeInMinutes !== examTimeInMinutes) {
        differenceHours = Math.floor(timeDifference / 60);
        differenceMinutes = timeDifference % 60;

        if (differenceHours === 0) {
            console.log(`${differenceMinutes} minutes before the start`);
        } else if (differenceMinutes < 10) {
            console.log(`${differenceHours}:0${differenceMinutes} hours before the start`);
        } else {
            console.log(`${differenceHours}:${differenceMinutes} hours before the start`);
        }
    }
}

onTimeForTheExam(9, 30, 9, 50);
onTimeForTheExam(9, 0, 8, 30);
onTimeForTheExam(16, 0, 15, 0);
onTimeForTheExam(9, 0, 10, 30);
onTimeForTheExam(14, 0, 13, 55);
onTimeForTheExam(11, 30, 8, 12);
onTimeForTheExam(10, 0, 10, 0);
onTimeForTheExam(11, 30, 10, 55);
onTimeForTheExam(11, 30, 12, 29);