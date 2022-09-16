// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(_data){
        this.data =_data
        this.children = []
    }

    add(data) {
        this.children.push(new Node(data));
      }
    
      remove(data) {
        this.children = this.children.filter(node => {
          return node.data !== data;
        });
      }
}

class Tree {
    constructor() {
        this.root = null
    }

    traverseBF() {
        if (!this.root) return null
        const result = [this.root.data]
        const queue = [...this.root.children]
        while (queue.length)
        {
           const currentElem = queue.shift() 
           result.push(currentElem.data)
           if (currentElem.children.length)
            queue.push(...currentElem.children)
        }
        return result
    }

    traverseDF() 
    {
        const visited = []
        const traverse = (node) =>
        {
            
            if (node.children.length)
                node.children.forEach(element => traverse(element))
            visited.push(node.data)
        }
        traverse(this.root)
        return visited
    }
}

const t = new Tree();
t.root = new Node('a');
t.root.add('b');
t.root.add('c');
t.root.children[0].add('d');

console.log(t.traverseBF())

t.root.children[0].add('e');
t.root.children[1].add('f');
//      a
//  b       c
//  d   e   f
console.log(t.traverseDF())


module.exports = { Tree, Node };
