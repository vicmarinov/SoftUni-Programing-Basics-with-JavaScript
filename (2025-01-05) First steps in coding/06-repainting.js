function repainting (nylonCoverQuantity, paintQuantity, paintThinnerQuantity, workHours) {
    nylonCoverQuantity += 2; // 2 sq. meters reserve
    paintQuantity *= 1.1; // 10 % reserve

    let totalSum = nylonCoverQuantity * 1.5 + paintQuantity * 14.5 + paintThinnerQuantity * 5;
    // A square meter of nylon cover costs 1.50 leva.
    // A liter of paint costs 14.50 leva.
    // A liter of paint thinner costs 5.00 leva.

    totalSum += 0.4; // 0.40 leva for pastic bags
    totalSum += 0.3 * totalSum * workHours; // A work hour costs 30 %

    console.log(totalSum);
}

repainting(10, 11, 4, 8);
repainting(5, 10, 10, 1);