function powLoop(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

function powRecursion(x, n) {
    return (n == 1) ? x : x * powRecursion(x, n - 1);
}

module.exports = { powLoop, powRecursion }