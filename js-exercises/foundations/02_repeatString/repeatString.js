const repeatString = function(text, times) {
    if (times < 0) {
        return "ERROR"
    }
    let repeated_text = "";
    for (let i = 0; i < times; i++) {
        repeated_text += text;
    }
    return repeated_text;
};

// Do not edit below this line
module.exports = repeatString;
