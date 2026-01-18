// let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)) {
//     console.log("Your number is the square root of " +
//         theNumber * theNumber);
// } else {
//     console.log("Hey. Why didn't you give me a number?");
// }

// #
// ##
// ###
// ####
// #####
// ######
// #######
// function pramyidStar(nums) {
//     let star = " "
//     for (let i = 1; i <= nums; i++) {
//         star += "#"
//         console.log(star);
//     }
// }

// pramyidStar(7);

// function fizzBuzz(nums) {
//     for (let i = 1; i <= nums; i++) {
//         if (i % 5 == 0 && i % 3 == 0) {
//             console.log(i, "fizzBuzz");
//         } else if (i % 3 == 0) {
//             console.log(i, "Fizz");
//         } else if (i % 3 == 0) {
//             console.log(i, "Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }
// let nums = 100;
// console.log(fizzBuzz(nums));


function chessBoard(num) {
    for (let i = 0; i < num; i++) {
        let str = " ";
        for (let j = 0; j < num; j++) {
            if ((i + j) % 2 === 0) {
                str += " ";
            } else {
                str += "#";
            }
        }
        console.log(str);
    }
}

chessBoard(8);