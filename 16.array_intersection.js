function arrayIntersection(arr1, aar2) {

    let set1 = new Set(arr1);

    const result = aar2.filter(item => set1.has(item))
    return [...new Set(result)];
}

console.log(arrayIntersection([1, 2, 3, 3, 6], [2, 6, 8]));