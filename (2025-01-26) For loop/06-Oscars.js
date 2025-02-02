function oscars (inputArray) {
    let actorName = inputArray[0];
    let points = Number(inputArray[1]);
    let judgesQuantity = Number(inputArray[2]);

    for (let i = 3; i <= (judgesQuantity * 2 + 2); i += 2) {
        let judgeName = inputArray[i];
        let judgePoints = Number(inputArray[i + 1]);
        
        points += (judgeName.length * judgePoints) / 2;
        
        if (points >= 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`);
            return;
        }
    }

    console.log(`Sorry, ${actorName} you need ${(1250.5 - points).toFixed(1)} more!`);
}

oscars(["Zahari Baharov", "205", 4, "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);