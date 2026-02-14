// const fs = require("fs");

// fs.readFile("text.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.error("Error reading file:", err);
//     } else {
//         console.log("File contents:", data);
//     }
// });

try {
    let res = 10 / 2;
    if (!isFinite(res)) {
        throw new Error("Cannot divide by zero");
    }
    console.log(res);
} catch (error) {
    console.error("Error occurred:", error.message);
} finally {
    console.log("Execution completed");
}