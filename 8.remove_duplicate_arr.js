// // Method 1
// function removeDuplicateArr(arr){
//     return [...new Set(arr) ];
// }
// const arr = [1,5,6,7,7,84,5,6,3,0];

// console.log(removeDuplicateArr(arr));

// Method 2 filler and indexof

// function removeDuplicateArr(arr){
//     return arr.filter((val,index,self) => (self.indexOf(val) == index));
// }
// const arr = [1,5,6,7,7,84,5,6,3,0];

// console.log(removeDuplicateArr(arr));

// Method3 reduce

function removeDuplicateArr(arr) {
    // return arr.reduce((unique,item)=>{
    //     return unique.includes(item) ? unique : [...unique,item];
    // },[]);

    // let result = arr.filter((val, index, self) => (self.indexOf(val) == index));
    // console.log(result)

    const uniqueArray = [];
    const uniqueArray1 = [];
    const seen = {};
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        if (!seen[value]) {
            seen[value] = true;
            uniqueArray.push(value);
        } else {
            uniqueArray1.push(value);
        }
    }
    return uniqueArray, uniqueArray1;
};
let arr = [1, 5, 6, 7, 7, 84, 5, 6, 3, 0];
console.log(removeDuplicateArr(arr));