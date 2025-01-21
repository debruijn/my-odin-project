const fibonacci = function(a) {
    a = parseInt(a);
    if (a < 0) {
        return "OOPS"
    }
    if (a === 0) {
        return 0
    }
    if (a === 1) {
        return 1
    }
    let lag1 = 1, lag2 = 0, curr = 1;
    for (let i = 2; i<a; i++) {
        lag2 = lag1;
        lag1 = curr;
        curr = lag2 + lag1;
    }
    return curr
};

// Do not edit below this line
module.exports = fibonacci;
