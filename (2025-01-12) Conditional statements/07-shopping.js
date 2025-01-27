function shopping (budget, videoCardsQuantity, processorsQuantity, ramMemoryQuantity) {
    // Price list
    // ----------
    // video card: 250.00 leva
    // processor:  35 % from the total cost of the video cards
    // RAM memory: 10 % from the total cost of the video cards

    let videoCardsSum = videoCardsQuantity * 250;
    let processorsSum = processorsQuantity * (videoCardsSum * 0.35);
    let ramMemorySum = ramMemoryQuantity * (videoCardsSum * 0.1);

    let totalSum = videoCardsSum + processorsSum + ramMemorySum;

    if (videoCardsQuantity > processorsQuantity) {
        totalSum *= 0.85; // 15 % discount
    }

    if (budget >= totalSum) {
        console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`);
    }
}

shopping (900, 2, 1, 3);
shopping (920.45, 3, 1, 1);