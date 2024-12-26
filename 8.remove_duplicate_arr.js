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

function removeDuplicateArr(arr){
    return arr.reduce((unique,item)=>{
        return unique.includes(item) ? unique : [...unique,item];
    },[]);
};

const arr = [1,5,6,7,7,84,5,6,3,0];

console.log(removeDuplicateArr(arr));