function suppliesForSchool (pensPackagesNumber, markersPackagesNumber, detergentLiters, discountPercent) {
    let totalSum = pensPackagesNumber * 5.8 + markersPackagesNumber * 7.2 + detergentLiters * 1.2;
    // A package of pens costs 5.80 leva.
    // A package of markers costs 7.20 leva.
    // A liter of the detergent costs 1.20 leva.

    let discountFraction = discountPercent / 100;

    totalSum *= 1 - discountFraction;

    console.log(totalSum);
}

suppliesForSchool(2, 3, 4, 25);
suppliesForSchool(4, 2, 5, 13);