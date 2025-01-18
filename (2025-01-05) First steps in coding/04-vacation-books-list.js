function vacationBooksList (pagesNumber, pagesPerHour, daysNumber) {
    let readingTimeTotal = pagesNumber / pagesPerHour;
    let readingTimeDaily = readingTimeTotal / daysNumber;
    console.log(readingTimeDaily);
}

vacationBooksList(212, 20, 2);
vacationBooksList(432, 15, 4);