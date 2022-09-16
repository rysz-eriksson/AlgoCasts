// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// const peopleList = [
//     {name: "Alice", birth: 1907, death: 1999},
//     {name: "Bob", birth: 1908, death: 1999},
//     {name: "Charlie", birth: 1909, death: 1998},
//     {name: "Alice", birth: 1920, death: 1997},
//     {name: "Alice", birth: 1930, death: 1996},
//     {name: "Alice", birth: 1940, death: 1995},
//     {name: "Alice", birth: 1950, death: 1994},
//     {name: "Alice", birth: 1993, death: 1993},
// ]

function livingPeople(array) {
    let yearsMap = {}
    for (let year = 1900; year < 2001; year++)
    {
        array.forEach(_person =>
        {
            if (year >= _person.birth && year <= _person.death)
            {
                if (yearsMap[year])
                    yearsMap[year]++
                else
                    yearsMap[year] = 1
            }
        })
    }
    let highestKey
    let highestNumber = 0
    for (const [key, value] of Object.entries(yearsMap))
    {
        if (value > highestNumber)
        {
            highestKey = key
            highestNumber = value
        }
    }
    return Number(highestKey)
}

module.exports = livingPeople;