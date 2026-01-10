function hIndex(citations) {
    let n = citations.length;
    let count = new Array(n + 1).fill(0);

    // Step 1
    for (let s of citations) {
        if (s >= n) {
            count[n]++;
        } else {
            count[s]++;
        }
    }

    // Step 2
    let papers = 0;
    for (let h = n; h >= 0; h--) {
        papers += count[h];
        if (papers >= h) {
            return h;
        }
    }
    return h;
}

let citations = [3, 0, 6, 1, 5];

console.log(hIndex(citations));