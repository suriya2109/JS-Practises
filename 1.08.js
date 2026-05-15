// let mp = [{
//         name: "abc",
//         firstName: "abcJ"
//     },
//     {
//         name: "def",
//         firstName: "defJ"
//     },
//     {
//         language: "ghi",
//         firstName: "tamil"
//     },
//     {
//         language: "ghi",
//         firstName: "english"
//     },
//     {
//         language: "ghi",
//         firstName: "french"
//     }
// ];

// let res = mp.reduce((acc, item) => {

//     // For name property
//     if (item.name) {
//         acc[item.name] = item.firstName;
//     }

//     // For language property
//     if (item.language) {
//         if (!acc[item.language]) {
//             acc[item.language] = [];
//         }

//         acc[item.language].push(item.firstName);
//     }

//     return acc;

// }, {});

// console.log(res);


let str = "hElLO worLd";

function toUpperCase(str) {
    let obj = {};

    str.split("").forEach(char => {
        if (char === char.toUpperCase() && char !== " ") {
            obj[char] = (obj[char] || 0) + 1;
        }
    });

    // Convert count into E_1, L_3 format
    for (let key in obj) {
        if (obj[key] > 1) {
            return `${key}_${obj[key]}`;
        }
    }

}

console.log(toUpperCase(str));