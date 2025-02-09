function vacationBooksList (pagesQuantity, pagesPerHour, daysQuantity) {
    let readingTimeTotal = pagesQuantity / pagesPerHour;
    let readingTimeDaily = readingTimeTotal / daysQuantity;
    console.log(readingTimeDaily);
}

vacationBooksList(212, 20, 2);
vacationBooksList(432, 15, 4);