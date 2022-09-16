// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const queue = []
    queue.push([root])
    let counter = 0

    const addToQueue = () =>
    {
        if (queue[counter].length)
        {
            queue[counter].forEach(elem => 
                {
                    if (!queue[counter + 1])
                        queue[counter + 1] = []
                    queue[counter + 1].push(...elem.children)
                })
        }
        counter++
    }
    while (counter === queue.length - 1)
        addToQueue()
    
    return queue.filter(elem => elem.length).map(elem => elem.length) 
}

// [root], [[root], [root.child1, root.child2, root.child3]],

module.exports = levelWidth;
