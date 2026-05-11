let mp = [{
        name: "abc",
        firstName: "abcJ"
    },
    {
        name: "def",
        firstName: "defJ"
    },
    {
        language: "ghi",
        firstName: "tamil"
    },
    {
        language: "ghi",
        firstName: "english"
    },
    {
        language: "ghi",
        firstName: "french"
    }
];

let res = mp.reduce((acc, item) => {

    // For name property
    if (item.name) {
        acc[item.name] = item.firstName;
    }

    // For language property
    if (item.language) {
        if (!acc[item.language]) {
            acc[item.language] = [];
        }

        acc[item.language].push(item.firstName);
    }

    return acc;

}, {});

console.log(res);