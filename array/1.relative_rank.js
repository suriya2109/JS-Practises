var findRelativeRanks = function(score) {
    let result = ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"];
    for (let i = 0; i < score.length; i++) {
        console.log(score[i]);
        for (let j = 0; j < i; j++) {
            console.log(score[i]);
            if (score[i] > score[j]) {
                let temp = score[i];
                score[i] = score[j];
                score[j] = temp;
            }
        }
    };
}

console.log(findRelativeRanks([5, 4, 3, 2, 1]));
// // The function takes two arguments: an accumulator and the current value being processed. The accumulator is the value that is returned after each iteration, and it is updated with the result of the function applied to the current value.
// // The reduce() method can also take an optional initial value as a second argument. If no initial value is provided, the first element of the array is used as the initial value, and the iteration starts from the second element.
// // The reduce() method is commonly used for tasks such as summing up values in an array, finding the maximum or minimum value, or concatenating strings.