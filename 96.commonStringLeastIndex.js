var findRestaurant = function(list1, list2) {
    let result = [];
    let map = new Map();
    let minSum = Infinity;

    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i);
    }

    for (let j = 0; j < list2.length; j++) {
        if (map.has(list2[j])) {
            sum = map.get(list2[j]) + j;
            if (sum < minSum) {
                minSum = sum;
                result = [list2[j]];
            } else if (sum === minSum) {
                result.push(list2[j]);
            }
        }
    }
    return result;
};

let list1 = ["KFC", "Shogun", "Burger King", "Tapioca Express"];
let list2 = ["Shogun", "KFC", "Burger King"];
console.log(findRestaurant(list1, list2));