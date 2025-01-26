function yardGreening (yardArea) {
    let price = yardArea * 7.61; // Greening of 1 square meter costs 7.61 leva
    let discount = price * 0.18 // 18 % discount
    
    price -= discount

    console.log(`The final price is: ${price} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(550);
yardGreening(150);