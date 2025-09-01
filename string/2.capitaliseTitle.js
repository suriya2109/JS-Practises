var capitalizeTitle = function(title) {
    let str = title.split(' ');
    let strLen = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > 3) {
            strLen += str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase() + ' ';
        } else {
            strLen += str[i].toLowerCase() + ' ';
        }
    }
    return strLen.trim();
};

let title = "fiRst leTTeR of EACH Word";

console.log(capitalizeTitle(title));