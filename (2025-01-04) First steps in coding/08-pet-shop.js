function petShop (dogFoodQuantity, catFoodQuantity) {
    let totalCosts = dogFoodQuantity * 2.5 + catFoodQuantity * 4;
    // A package of dog food costs 2.50 leva, and a package of cat food costs 4.00 leva.

    console.log(`${totalCosts} lv.`);
}

petShop(5, 4);
petShop(13, 9);