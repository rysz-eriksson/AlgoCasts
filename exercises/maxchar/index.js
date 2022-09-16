// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const arr = str.split('')
    const frequencyObj = {}
    arr.forEach(item =>
    {
        if (frequencyObj[item])
            frequencyObj[item]++
        else
            frequencyObj[item] = 1
    })

    let highestNumber = 0
    let highestKey
    for (const [key, value] of Object.entries(frequencyObj)) {
        if (value > highestNumber)
        {
            highestNumber = value
            highestKey = key
        }
    }
    return highestKey
}

module.exports = maxChar;
