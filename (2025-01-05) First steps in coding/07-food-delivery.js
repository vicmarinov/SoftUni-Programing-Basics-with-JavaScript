function foodDelivery (chickenMealsQuantity, fishMealsQuantity, veganMealsQuantity) {
    totalSum = chickenMealsQuantity * 10.35 + fishMealsQuantity * 12.4 + veganMealsQuantity * 8.15;
    // A chicken meal costs 10.35 leva.
    // A fish meal costs 12.40 leva.
    // A vegan meal costs 8.15 leva.

    totalSum *= 1.2; // The dessert costs 20 %
    totalSum += 2.5; // 2.50 leva delivery expenses

    console.log(totalSum);
}

foodDelivery(2, 4, 3);
foodDelivery(9, 2, 6);