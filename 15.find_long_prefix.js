function longPrefix(str) {
    let prefix = str[0];
    for (let i = 1; i < str.length; i++) {
        while (str[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === 0) return "";
        }
    }
    return prefix;
}

console.log(longPrefix(["flow", "flat", "flower"]));