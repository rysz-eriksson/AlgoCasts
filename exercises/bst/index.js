// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(_data) {
        this.data = _data
        this.left = null
        this.right = null
    }
    insert(_data) {
        const node = new Node(_data)
        const recursiveInsert = (_currentLevel, _node) =>
        {
            const insertLeftOrRight = (direction) =>
            {
                if (!_currentLevel[direction])
                    _currentLevel[direction] = _node
                else
                    recursiveInsert(_currentLevel[direction], _node)
            }

            if (_node.data < _currentLevel.data)
                insertLeftOrRight("left")
            else
                insertLeftOrRight("right")

        }
        recursiveInsert(this, node)
    }
    contains(value) {
        let result = null
        const searchRec = (_current, _value) => {
            if (!_current || _current.data === null)
                return;
            if (_current.data === _value)
            {
                result = _current
                return;
            }
            else if (_current.data > _value)
                searchRec(_current.left, _value)
            else
                searchRec(_current.right, _value)
        }
        searchRec(this, value)
        return result
    }
}

const node = new Node(10);
node.insert(5);
node.insert(15);
node.insert(20);
node.insert(0);
node.insert(-5);
node.insert(3);
console.log(node.contains(3));

module.exports = Node;
