// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const regex = /[a-z]/gi
    const inputA = stringA.match(regex).map(char => char.toLowerCase())
    const inputB = stringB.match(regex).map(char => char.toLowerCase())

    const countChars = (_inpuArr) =>
    {
        const result = {}
        for (const char of _inpuArr)
        {
            if (result[char])
                result[char]++
            else
                result[char] = 1
        }
        return result
    }

    const freqA = countChars(inputA)
    const freqB = countChars(inputB)
    if (Object.keys(freqA).length !== Object.keys(freqB).length) return false
    return Object.keys(freqA).every(key => freqB[key] && freqA[key] === freqB[key])
}

// anagrams('rail safety', 'fairy tales')
module.exports = anagrams;
