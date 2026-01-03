const capitalize = function(x) {
    return x[0].toUpperCase() + x.slice(1)
}

const reverseString = function(x) {
    if (x.length < 2) {
        return x
    }
    if (x.length === 2) {
        return x[1] + x[0]
    }
    return reverseString(x.slice(1)) + x[0]
}

const analyzeArray = function(arr) {
    let average = arr.reduce((x, y) => x + y, 0) / arr.length
    let min = arr.reduce((x,y) => x < y ? x : y)
    let max = arr.reduce((x,y) => x > y ? x : y)
    let length = arr.length
    return {'average': average,
    'length': length,
    'max': max,
    'min': min}
}

module.exports = {capitalize, reverseString, analyzeArray};
