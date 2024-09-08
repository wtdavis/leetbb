/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    let res = null

    let recursionReturnValue = palRecur(x)

    if (recursionReturnValue === x) {

    }



    return res
};

const palRecur = function (num, arr) {
    let res = arr | [];

    let digit = num % 10;
    let next = Math.floor(num/10)
    if (next === 0) {
        
    }

    res.push(digit)
    palRecur(next, res)
}


isPalindrome(202)
isPalindrome(20)
isPalindrome(1010)