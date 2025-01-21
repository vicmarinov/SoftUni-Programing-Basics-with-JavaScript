function workingHours (hour, day) {
    if (hour >= 10 && hour <= 18 && day !== "Sunday") { // If the office is open in days from Monday to Saturday,
                                                        // then it's closed only in Sunday.
        console.log("open");
    } else {
        console.log("closed");
    }
}

// Alternative variant
// -------------------

// function workingHours (hour, day) {
//     if (hour >= 10 && hour <= 18) {
//         switch (day) {
//             case "Monday":
//             case "Tuesday":
//             case "Wednesday":
//             case "Thursday":
//             case "Friday":
//                 console.log("open");
//                 break;
//             default:
//                 console.log("closed");
//                 break;
//         }
//     } else {
//         console.log("closed");
//     }
// }

workingHours(11, "Monday");
workingHours(19, "Friday");
workingHours(11, "Sunday");