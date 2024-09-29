const mergeSortedArr = function (num1, num2, m, n) {
    let arr = [];

    for (let i=0;i<(m+n);i++){
        arr.push(num1.pop())
    }
    console.log(arr)
}

mergeSortedArr([1,2,3,4,0,0,0], [2,4,6], 4, 3)
12