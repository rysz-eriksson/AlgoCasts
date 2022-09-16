function countUnique(inputArr) {
    let startPointer = 0
    let endPointer = 1
    while (endPointer < inputArr.length)
    {
        if (inputArr[endPointer] !== inputArr[endPointer - 1])
            startPointer++
        endPointer++
    }
    return inputArr.length ? startPointer + 1 : 0
}

console.log(countUnique([1,1,1,1,2])) //2
console.log(countUnique([1,2,3,4,4,7,7,12,12,13])) //7
console.log(countUnique([])) //0
console.log(countUnique([-2,-1,-1,0,1])) //4


