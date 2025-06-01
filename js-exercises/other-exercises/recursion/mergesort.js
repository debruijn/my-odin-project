function popMax(arr) {
    let maxIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
    }
    const [max] = arr.splice(maxIndex, 1);
    return [max, arr];
}

function mergesortRec(arr) {

    if (arr.length === 1) {
        return arr
    } else {
        let max_arr
        [max_arr, arr] = popMax(arr)
        arr = mergesortRec(arr)
        arr.push(max_arr)
        return arr
    }

}


console.log(mergesortRec([3, 2, 1, 13, 8, 5, 0, 1]))
console.log(mergesortRec([105, 79, 100, 110]))
