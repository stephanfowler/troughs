var _ = require("underscore");

function getArray() {
    return _.map(process.argv.splice(2), function (val) {return parseInt(val, 10);});
}

function innerItems(arr) {
    if(arr.length < 3) return [];

    return _.map(_.range(1, arr.length - 1), function(i) {
        return arr[i];
    })
}

function isValley(arr) {
    if (arr.length < 3) return false;

    return _.every(innerItems(arr), function(ii) {
        return ii < _.first(arr) && ii < _.last(arr)
    })
}

function splitAtPeak(arr, getLeft) {
    var right = _.clone(arr), 
        peak = _.max(innerItems(right)),
        left = right.splice(0, _.indexOf(innerItems(right), peak) + 1);

    return getLeft ? left.concat(peak) : right;
}

function puddle(arr) {
    if (arr.length < 3) {
        return 0;
    } else if (isValley(arr)) {
        return (arr.length - 2) * _.min([_.first(arr), _.last(arr)]) - _.reduce(innerItems(arr), function(m,n) {return m + n}, 0)
    } else {
        return puddle(splitAtPeak(arr, true)) + puddle(splitAtPeak(arr, false));
    }
}

console.log(puddle(getArray()));
