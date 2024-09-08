/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    let res = null

    let recursionReturnValue = palRecur(x)

    if (recursionReturnValue === x) {

    }

12346

};

const palRecur = function (num, arr) {
    let res = []
    if (arr && arr.length > 0) {
        res = arr
    }
    let next = Math.floor(num/10)
    if (next === 0) {
        return res
    }

    let digit = num % 10;
    res.push(digit)
    palRecur(next, res)
}


isPalindrome(202)