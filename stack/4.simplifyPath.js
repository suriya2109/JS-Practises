function simplifyPath(path) {
    let strSplit = path.split("/");
    let res = [];

    for (let char of strSplit) {
        if (char == "." || char == "") continue;
        if (char == "..") {
            if (res.length) {
                res.pop();
            }
        } else {
            res.push(char);
        }
    }
    return "/" + res.join("/");
}

let path = "/.../a/../b/c/../d/./";
console.log(simplifyPath(path));