const findTheOldest = function(a) {
    console.log(a.reduce(findOlder))
    return a.reduce(findOlder)
};

const findOlder = function(a, b) {
    if (!('yearOfDeath' in a)) {
        a.yearOfDeath = 2025
    }
    if (!('yearOfDeath' in b)) {
        b.yearOfDeath = 2025
    }
    if ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) {
        return a
    }
    return b
}

// Do not edit below this line
module.exports = findTheOldest;
