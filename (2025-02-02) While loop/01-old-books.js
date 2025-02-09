function oldBooks (inputArray) {
    let bookSearched = inputArray[0];
    let booksChecked = 0;

    let i = 1; // The first element of the inputArray is bookSearched,
               // and we iterate through the other elements.

    let command = inputArray[i];
    i++;

    while (command !== "No More Books") {
        let book = command;

        if (book === bookSearched) {
            console.log(`You checked ${booksChecked} books and found it.`);
            break;
        }

        booksChecked++;

        command = inputArray[i];
        i++;
    }

    if (command === "No More Books") {
        console.log("The book you search is not here!");
        console.log(`You checked ${booksChecked} books.`);
    }
}

oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);
oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship",
          "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);