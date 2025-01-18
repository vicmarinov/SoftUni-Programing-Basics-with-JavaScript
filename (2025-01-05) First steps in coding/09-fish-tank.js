function fishTank (length, width, height, otherStuffPercent) {
    let fishTankVolume = length * width * height; // in cubic centimeters
    fishTankVolume /= 1000; // in liters
    
    let otherStuffVolume = fishTankVolume * (otherStuffPercent / 100);

    let waterVolume = fishTankVolume - otherStuffVolume;
    console.log(waterVolume);
}

fishTank(85, 75, 47, 17);
fishTank(105, 77, 89, 18.5);