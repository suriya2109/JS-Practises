console.log(findLongPrefix(['flower', 'flat', 'flow']));

function findLongPrefix(str) {

    if (str.length === 0) return "";

    prefix = str[0];

    for (i = 1; i < str.length; i++) {
        while (str[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;
}