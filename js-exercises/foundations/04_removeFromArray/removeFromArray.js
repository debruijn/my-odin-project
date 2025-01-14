const removeFromArray = function(arr) {
    let newArr = [];
    let nrToRemove = arguments.length - 1;

    for (let i = 0; i < arr.length; i++) {
        let elementToAdd = arr.at(i)
        let canAdd = true;
        for (let j = 1; j <= nrToRemove; j++) {
            if (elementToAdd === arguments[j]) {
                canAdd = false
            }
        }
        if (canAdd) {
            newArr.push(elementToAdd)
        }
    }
    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
