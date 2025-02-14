function cinemaTickets (inputArray) {
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;

    let index = 0;

    let commandFirst = inputArray[index];
    index++;

    while (commandFirst !== "Finish") {
        let filmTitle = commandFirst;
        
        let filmSeatsFull = 0;
        let filmSeatsTotal = Number(inputArray[index]);
        index++;

        let commandSecond = inputArray[index];
        index++;

        while (commandSecond !== "End") {
            let ticket = commandSecond;
            
            switch(ticket) {
                case "student":  studentTickets++;  break;
                case "standard": standardTickets++; break;
                case "kid":      kidTickets++;      break;
            }

            filmSeatsFull++;

            if (filmSeatsFull === filmSeatsTotal) {
                break;
            }

            commandSecond = inputArray[index];
            index++;
        }

        let filmSeatsFullPercent = (filmSeatsFull / filmSeatsTotal) * 100;
        console.log(`${filmTitle} - ${filmSeatsFullPercent.toFixed(2)}% full.`)

        commandFirst = inputArray[index];
        index++;
    }

    let totalTickets = studentTickets + standardTickets + kidTickets;
    console.log(`Total tickets: ${totalTickets}`);

    let studentTicketsPercent = (studentTickets / totalTickets) * 100;
    console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`);

    let standardTicketsPercent = (standardTickets / totalTickets) * 100;
    console.log(`${standardTicketsPercent.toFixed(2)}% standard tickets.`);

    let kidTicketsPercent = (kidTickets / totalTickets) * 100;
    console.log(`${kidTicketsPercent.toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End",
               "Scary Movie", "6", "student", "student", "student", "student", "student", "student",
               "Finish"]);

cinemaTickets(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End",
               "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End",
               "Amadeus", "3", "standard", "standard", "standard",
               "Finish"]);