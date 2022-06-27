const analyzeArray = (() => {
    const average = (arr) => {
        let sum = arr.reduce((previous, current) => previous + current, 0);
        return sum / arr.length;
    }
    const min = (arr) => {
        for (let i = 0; i <= arr.length; i++) {
            if (arr[i] < arr[i + 1]) return arr[i];
        }
    }
    const max = (arr) => {
        for (let i = 0; i <= arr.length; i++) {
            if (arr[i] > arr[i + 1]) return arr[i]
        }
    }
    const length = (arr) => arr.length;

    return { average, min, max, length };

})();

module.exports = analyzeArray;