function firstOccurrence(haystack, needle) {
    let needleHash = {}
    let haystackHash = {}
    let needleArr = needle.split()
    let haystackArr = haystack.split()
    for (let i=0;i<needleArr.length;i++){
        needleHash[i] = needleArr[i]
    }
    for (let i=0;i<haystackArr.length;i++){
        haystackHash[i] = haystackArr[i]
    }


    let index = null

    function compare () {
        let counter = 0
        let max = needleArr.length
        for (let i=0;i<haystackArr.length;i++){
            if (needleHash[i] === haystackArr[i]) {
                // continue
            } else {
                // break
            }

            dsf
        }

    }
1
2
3

}