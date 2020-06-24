module.exports = function(arr) {
    return {
        isEmpty: function() {
            return arr.value
        },

        hasNElements: function (n) {
            return arr.length == n
        },
    }
}