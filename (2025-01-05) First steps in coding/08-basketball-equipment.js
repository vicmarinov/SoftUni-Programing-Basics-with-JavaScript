function basketballEquipment (annualTrainingFee) {
    let sneakers = annualTrainingFee * 0.6; // they're 40 % cheaper than the fee
    let suit = sneakers * 0.8; // it's 20 % cheaper than the sneakers
    let ball = suit * (1 / 4); // it's 1/4 from the price of the suit
    let accessories = ball * (1 / 5) // it's 1/5 from the price of the ball

    let totalSum = annualTrainingFee + sneakers + suit + ball + accessories;
    console.log(totalSum);
}

basketballEquipment(365);
basketballEquipment(550);