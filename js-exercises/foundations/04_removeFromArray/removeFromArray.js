const removeFromArray = function(arr) {
    let newArr = [];
    let nrToRemove = arguments.length - 1;
    for (let i = 0; i < arr.length; i++) {
        let to_check = arr.at(i)
        let canAdd = true;
        for (let j = 1; j <= nrToRemove; j++) {
            if (to_check === arguments[j]) {
                canAdd = false
            }
        }
        if (canAdd) {
            newArr.push(to_check)
        }
    }
    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
