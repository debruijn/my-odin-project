const reverseString = function(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        result += text.at(-i-1);
    }
    return result
};

// Do not edit below this line
module.exports = reverseString;
