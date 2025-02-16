

const mergeAlternively = (word0, word1) => {

    console.log(word0)
    console.log(word1)
    let res = []
    function split (input) {
        let resArr = [];
        input = input.split("")
        for (let i=0;i<input.length;i++) {
            resArr.push(input[i])
        }
        return resArr
    }

    let arr0 = split(word0)
    let arr1 = split(word1)
    
    function combine (part0, part1) {
        let resArr = []
        let counter = 0
        while (part0.length > 0 || part1.length > 0) {
            if (counter === 0) {
                resArr.push(part0.pop())
                counter = 1
            } else {
                resArr.push(part1.pop());
                counter = 0
            }
        }
        resArr.push(part0)
        resArr.push(part1)
        res = resArr
        console.log(resArr)
    }
    1
    2
    3
    4
    5
    6
    7
    8

    1
    2
    3
    4
    5
    6
    combine(arr0, arr1)
    console.log(res.join())
    return res.join()
}

let word0 = "abcd"
let word1 = "efgh"

mergeAlternively(word0, word1)