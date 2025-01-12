function pyramidPattern(rows) {

    // Diamond pattern
    // for (let i = 1; i <= rows; i++) {
    //     let spaces = "";
    //     let stars = "";

    //     for (let j = 1; j <= rows - i; j++) {
    //         spaces += " ";
    //     }
    //     for (let k = 1; k <= (2 * i) - 1; k++) {
    //         stars += "*";
    //     }
    //     console.log(spaces + stars);
    // }
    // for (let i = rows - 1; i >= 1; i--) {
    //     let spaces = "";
    //     let stars = "";

    //     for (let j = 1; j <= rows - i; j++) {
    //         spaces += " ";
    //     }
    //     for (let k = 1; k <= (2 * i) - 1; k++) {
    //         stars += "*";
    //     }
    //     console.log(spaces + stars);
    // }

    // Arrow pattern
    for (let i = 1; i <= rows; i++) {
        let spaces = "";
        let starts = "";
        for (let j = rows - 1; j >= i; j--) {
            spaces += " ";
        }
        for (let k = 1; k <= i; k++) {
            starts += "*";
        }
        console.log(spaces + starts)
    }
    for (let i = rows - 1; i >= 1; i--) {
        let spaces = "";
        let starts = "";
        for (let j = rows - 1; j >= i; j--) {
            spaces += " ";
        }
        for (let k = 1; k <= i; k++) {
            starts += "*";
        }
        console.log(spaces + starts)
    }

}

pyramidPattern(5);