const palindromes = function (a) {
    let stripped = a.toLowerCase().split('').filter(
        (x) => !('!, .'.split('').includes(x))
    );
    return stripped.join('') === stripped.toReversed().join('')
};

// Do not edit below this line
module.exports = palindromes;
