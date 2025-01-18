function figuresArea (figureType, size1, size2) {
    let figureArea;

    if (figureType === "square") {
        figureArea = size1 * size1;
    } else if (figureType === "rectangle") {
        figureArea = size1 * size2;
    } else if (figureType === "circle") {
        figureArea = Math.PI * Math.pow(size1, 2);
    } else if (figureType === "triangle") {
        figureArea = (size1 * size2) / 2;
    }

    // Rounding figureArea to 3 digits after the decimal separator
    figureArea = Math.round(figureArea * 1000) / 1000;

    // Alternative:
    // figureArea =  figureArea.toFixed(3);

    console.log(figureArea);
}

figuresArea("square", 5);
figuresArea("rectangle", 7, 2.5);
figuresArea("circle", 6);
figuresArea("triangle", 4.5, 20);