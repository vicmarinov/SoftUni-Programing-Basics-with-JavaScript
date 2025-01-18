function depositCalculator (depositedSum, termOfDeposit, annualInterestRatePercent) {
    annualInterestRateFraction = annualInterestRatePercent / 100;
    let finalSum = depositedSum + termOfDeposit * ((depositedSum * annualInterestRateFraction) / 12);
    console.log(finalSum);
}

depositCalculator(200, 3, 5.7);
depositCalculator(2350, 6, 7);