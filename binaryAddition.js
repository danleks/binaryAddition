const binaryAddition = (a,b) => {
    if (
           typeof a !== 'number'
        || typeof b !== 'number'
        || !Number.isInteger(a)
        || !Number.isInteger(b)
    )
        return false;

    let result = a+b;
    const binary = [];

    while(result > 0) {
        if (result % 2 === 0) {
            binary.unshift(0);
        } else if (result % 2 === 1) {
            binary.unshift(1);
        }

        result = Math.floor(result/2);
    }

    return binary.join('');

};

module.exports = binaryAddition;