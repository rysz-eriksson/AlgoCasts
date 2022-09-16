function sumZero(inputArr) {
    let startPointer = 0
    let endPointer = inputArr.length - 1
    let result = undefined
    while (startPointer < endPointer)
    {
        const sum = inputArr[startPointer] + inputArr[endPointer]
        if (sum === 0)
        {
            result = [inputArr[startPointer], inputArr[endPointer]]
            break;
        }
        else if (sum > 0)
            endPointer--
        else
            startPointer++
    } 
    
    return result
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,5]))