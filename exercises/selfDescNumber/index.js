function selfDescNumber(number, base) {
    const input = number.toString().split('')
    if (input.length !== base)
        return false

    const freqList = {}
    input.forEach(element => 
    {
        if (freqList[element])
            freqList[element]++
        else
        freqList[element] = 1
    });
    for (i = 0; i < input.length; i++)
    {
        const number = i.toString()
        if (!freqList[number])
            freqList[number] = 0
    }
    return input.every((number, index) => freqList[index.toString()] === Number(number))
}

console.log(selfDescNumber(6210001000, 10)) //true
console.log(selfDescNumber(2020, 4)) //true
console.log(selfDescNumber(42101000, 8)) //true
console.log(selfDescNumber(521001000, 9)) //true
console.log(selfDescNumber(42101050, 8)) //false
console.log(selfDescNumber(5211100, 8)) //false




module.exports = selfDescNumber;