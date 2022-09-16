// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    const char = "#"
    const space = ' '
    for (let i = 1; i <= n; i++)
    {
        console.log(`${char.repeat(i)}${space.repeat(n - i)}`)
    }
}

steps(4)

module.exports = steps;
