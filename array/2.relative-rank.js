function relativeRank(num) {

    // Sort the array in descending order and remove duplicates
    let sortArr = [...num].sort((a, b) => b - a);

    reverseMap = new Map();
    sortArr.forEach((value, idx) => {
        if (!reverseMap.has(value)) {
            reverseMap.set(value, idx + 1);
        }
    });

    // 
    return num.map(value => {
        let rank = reverseMap.get(value);
        if (rank === 1) return "Gold Medal";
        if (rank === 2) return "Silver Medal";
        if (rank === 3) return "Bronze Medal";
        return rank + "";
    });
}

let num = [3, 7, 2, 9, 5];
console.log(relativeRank(num)); // Output: 3

// Sorting → O(n log n)

// Mapping → O(n)

// Overall → O(n log n)