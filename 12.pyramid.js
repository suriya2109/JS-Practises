function pyramidPattern(rows) {

    // Diamond pattern
    for (let i = 1; i <= rows; i++) {
        let spaces = "";
        let stars = "";

        for (let j = 1; j <= rows - i; j++) {
            spaces += " ";
        }
        for (let k = 1; k <= (2 * i) - 1; k++) {
            stars += "*";
        }
        console.log(spaces + stars);
    }
    for (let i = rows - 1; i >= 1; i--) {
        let spaces = "";
        let stars = "";

        for (let j = 1; j <= rows - i; j++) {
            spaces += " ";
        }
        for (let k = 1; k <= (2 * i) - 1; k++) {
            stars += "*";
        }
        console.log(spaces + stars);
    }

    // Arrow pattern
    for (var i = 1; i <= rows; i++) {
        var stars = "";
        var spaces = "";
        for (var j = rows - 1; j >= i; j--) {
            spaces += " ";
        }
        for (var k = 1; k <= j; k++) {
            stars += "*";
        }
        console.log(spaces + stars);
    }
    for (var i = 1; i <= rows; i++) {
        var stars = "";
        var spaces = "";
        for (var j = 1; j <= i - 1; j++) {
            spaces += " ";
        }
        for (var k = rows - 1; k >= i; k--) {
            stars += "*";
        }
        console.log(spaces + stars);
    }

}

pyramidPattern(5);