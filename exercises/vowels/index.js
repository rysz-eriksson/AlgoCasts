// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     let counter = 0
//     const inputArray = str.split('').map(elem => elem.toLowerCase())
//     for (const char of inputArray)
//     {
//         if (vowels.find(elem => elem === char))
//             counter++
//     }
//     return counter
// }

function vowels(str) {
    const regex = /[aeiou]/gi
    const reMatches = str.match(regex)
    return reMatches ? reMatches.length : 0
}

module.exports = vowels;
