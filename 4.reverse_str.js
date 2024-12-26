const reverseStr = "suriya";

const reverseString = reverseFunc(reverseStr);

console.log(reverseString);

function reverseFunc(str){
    reversed="";
    for(let i=str.length-1;i>=0;i--){
        reversed+=str[i];
    }
    return reversed;
}