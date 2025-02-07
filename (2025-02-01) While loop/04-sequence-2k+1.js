function sequence2kPlus1 (numMax) {
    let num = 1;

    while (num <= numMax) {
        console.log(num);
        num = 2 * num + 1;
    }
}

sequence2kPlus1(3);
sequence2kPlus1(8);
sequence2kPlus1(17);
sequence2kPlus1(31);