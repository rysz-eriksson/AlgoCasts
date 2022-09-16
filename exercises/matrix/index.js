// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const result = []
    for (let i = 0; i < n; i++)
        result.push(new Array(n))
    let amount = n
    let horizontal = true
    let ascending = true
    let counter = 0
    let x = 0
    let y = 0
    let value = 1
    const setValues = () =>
    {
        let startPoint = horizontal ? x : y
        if (ascending)
        {
            for (let i = startPoint; i < startPoint + amount; i++, value++)
            {
                if (horizontal)
                {
                    result[y][i] = value
                    x = i
                }
                else
                {
                    result[i][x] = value
                    y = i
                }
                    
            }
        }
        else
        {
            for (let i = startPoint; i > startPoint - amount; i--, value++)
            {
                if (horizontal)
                {
                    result[y][i] = value
                    x = i
                }

                else
                {
                    result[i][x] = value
                    y = 1
                }

            }
        }
    }

    while (value <= n*n)
    {
        setValues()
        counter++
        
        if (counter % 2 === 0)
            ascending = !ascending
        else 
            amount--
        if (horizontal && ascending)
            y++
        else if (horizontal && !ascending)
            y--
        else if (!horizontal && ascending)
            x++
        else
            x--
        horizontal = !horizontal


    }
    return result
}

module.exports = matrix;
