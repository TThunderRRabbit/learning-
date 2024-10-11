function leapYears(x) {
    if (parseInt(x) % 4 == 0 && parseInt(x) % 100 != 0) {
        return true;
    }
    else if (parseInt(x) % 400 == 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(leapYears(1600))
console.log(leapYears(2000))

