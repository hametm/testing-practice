const analyzeArray = (() => {
    const average = (arr) => {
        let sum = arr.reduce((previous, current) => previous + current, 0);
        return sum / arr.length;
    }
    const min = (arr) => {
        return Math.min(...arr);
    }
    const max = (arr) => {
        return Math.max(...arr);
    }
    const length = (arr) => arr.length;

    return { average, min, max, length };

})();

module.exports = analyzeArray;