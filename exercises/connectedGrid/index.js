// 0123       012         01234
// +----+     +---+       +-----+
// 0 |OXXX|   0 |XXX|     0 |OOXOO|
// 1 |OXOO|   1 |OOO|     1 |XXXOO|
// 2 |OXXO|   2 |OOO|     2 |XXOXO|
// 3 |OOXO|   3 |OOO|     3 |OOOXX|
// 4 |XXXO|   4 |OOO|       +-----+
// +----+     +---+          NOT
// CONNECTED! CONNECTED!    CONNECTED!

function grid(grid) {
    const colNumber = grid[0].length
    const xPositions = new Array(colNumber).fill(false)
    let continued = false
    let previousRow = []
    for (let row of grid)
    {
        row.forEach((element, index) => {
            if (element === 'X')
            {
                xPositions[index] = true
                if (previousRow[index] === 'X')
                    continued = true
            }
        });
        if (!xPositions[0] && !xPositions[row.length - 1])
            xPositions.fill(false)
        if (!continued && previousRow.length)
            xPositions.fill(false)
        if (xPositions.every(elem => elem))
            return true
        previousRow = row
    }
    return false
}

console.log(grid([
    ['O', 'X', 'X', 'O'],
    ['O', 'X', 'O', 'O'],
    ['O', 'X', 'X', 'O'],
    ['O', 'O', 'X', 'O'],
    ['X', 'X', 'X', 'O'],
  ]))

module.exports = grid;