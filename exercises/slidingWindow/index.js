function maxSubarraySum(inputArr, sumNumber) {
    if (sumNumber > inputArr.length) return null
    let result = null
    let endPointer = sumNumber
    let window = inputArr.slice(0, endPointer)
    // let firstValue 
    // let lastValue
    result = window.reduce((acc, cur) => acc + cur)
    let maxSum = result
    // while (endPointer < inputArr.length) 
    // {
    //     firstValue = window[0]
    //     lastValue = inputArr[endPointer]
    //     window.shift()
    //     window.push(lastValue)
    //     result = result - firstValue + lastValue
    //     if (result > maxSum)
    //         maxSum = result
    //     endPointer++
    // }
    for (let i = sumNumber; i < inputArr.length; i++)
    {
        result = result - inputArr[i - sumNumber] + inputArr[i]
        maxSum = Math.max(result, maxSum)
    }
    return maxSum
}

console.log(maxSubarraySum([1,2,5,2,8,1,5], 2)) //10
console.log(maxSubarraySum([1,2,5,2,8,1,5], 4)) //17
console.log(maxSubarraySum([4,2,1,6], 1)) //6
console.log(maxSubarraySum([4,2,1,6], 4)) //13
console.log(maxSubarraySum([], 4)) //null
