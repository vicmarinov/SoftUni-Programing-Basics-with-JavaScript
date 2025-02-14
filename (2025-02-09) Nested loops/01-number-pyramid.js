function numberPyramid (numEnd) {
    let row = 1;
    let num = 1;
    
    while (num <= numEnd) {
        let outputRow = "";

        for (let i = 1; i <= row; i++) {
            if (num > numEnd) {
                break;
            }

            outputRow += num + " ";
            num++;
        }

        console.log(outputRow);
        row++;
    }
}

numberPyramid(7);
numberPyramid(12);
numberPyramid(15);