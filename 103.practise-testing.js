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


// function chessBoard(num) {
//     for (let i = 0; i < num; i++) {
//         let str = " ";
//         for (let j = 0; j < num; j++) {
//             if ((i + j) % 2 === 0) {
//                 str += " ";
//             } else {
//                 str += "#";
//             }
//         }
//         console.log(str);
//     }
// }

// chessBoard(8);

// function zeroPad(number, width) {
//     let string = String(number);
//     while (string.length < width) {
//         string = "0" + string;
//     }
//     return string;
// }

// function printFarmInventory(cows, chickens, pigs) {
//     console.log(`${zeroPad(cows, 3)} Cows`);
//     console.log(`${zeroPad(chickens, 3)} Chickens`);
//     console.log(`${zeroPad(pigs, 3)} Pigs`);
// }
// printFarmInventory(7, 16, 3);

// function mathMin(s, l) {
//     if (s < l) {
//         return s;
//     } else {
//         return l;
//     }
// }

// console.log(mathMin(6, 6))

// function oddEven(num) {
//     if (num % 2 == 0) {
//         console.log("even");
//     } else {
//         console.log("odd");
//     }
// }

// oddEven(1200000);

// function isEven(n) {
//     if (n === 0) return true;
//     if (n === 1) return false;
//     return isEven(n - 2);
// }

// console.log(isEven(50));
// console.log(isEven(75));

function countChar(string, n) {
    let countBs = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === n) {
            countBs++;
        }
    }
    return countBs;
}

function countBean(string) {
    return countChar(string, "o");
}

console.log(countBean("the Ball is red colour"))