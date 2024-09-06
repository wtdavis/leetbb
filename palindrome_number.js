/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    //recursion: take x%10 to get 1's place digit. divide by 10 to get everything but 1's, recur

    let palRecursion = function(num, arr) {

        if (num === 0) {
            return arr
        }

        if (num) {
        let tmp0 = num % 10
        let tmp1 = Math.floor(num/10)
        }

        

        if (tmp0 ) {
            arr = arr.concat(tmp0)
            palRecursion(tmp1, arr)
        } 
    
    }

    //final return: true/false based on equivalency between recursive result and input integer 'x'
    let res = []

    if (palRecursion(x, res) === x) {
        return true
    } else {
        return false
    }
};