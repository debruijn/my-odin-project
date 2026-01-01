class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}


class Tree {
    constructor(array) {
        this.root = this.buildTree(array)
    }

    buildTree(array) {
        array = Array.from(new Set(array))
        array.sort((a, b) => (a - b))
        return this.buildTreeIter(array, 0, array.length - 1)
    }

    // Recursive Function to Create BST
    buildTreeIter(array, start = 0, end = array.length - 1) {
        if (start > end) return null;

        let mid = start + Math.floor((end - start) / 2);
        let root = new Node(array[mid]);

        // Divide from middle element
        root.left = this.buildTreeIter(array, start, mid - 1);
        root.right = this.buildTreeIter(array, mid + 1, end);

        return root;
    }

    insert(value) {
        this.insertIter(value)
    }

    insertIter(value, node = this.root) {
        if (node.value === value) return
        if (value < node.value) {
            if (node.left === null) {
                node.left = new Node(value)
            } else {
                this.insertIter(value, node.left)
            }
        } else {
            if (node.right === null) {
                node.right = new Node(value)
            } else {
                this.insertIter(value, node.right)
            }
        }
    }

    delete(value) {
        return this.deleteIter(value)
    }

    deleteItem(value, node) {
        if ((node.left === null) && (node.right === null)) {
            return null
        } else if (node.left === null) {
            return node.right
        } else if (node.right === null) {
            return node.left
        } else {
            let swap_node = node.right
            while (swap_node.left !== null) {
                swap_node = swap_node.left
            }
            node.value = swap_node.value
            swap_node.value = value
            this.deleteIter(value, node.right, node, 'right')
            return node
        }
    }

    deleteIter(value, node = this.root, parent = this, set = 'root') {
        if (value === node.value) {
            if (set === 'left') {
                parent.left = this.deleteItem(value, node)
            } else if (set === 'right') {
                parent.right = this.deleteItem(value, node)
            } else {
                parent.root = this.deleteItem(value, node)
            }
            return true
        }

        if (value < node.value) {
            if (node.left === null) {
                return false
            } else {
                let nxt_node = node.left
                if (nxt_node.value === value) {
                    node.left = this.deleteItem(value, nxt_node)
                    return true
                }
                return this.deleteIter(value, nxt_node)
            }
        } else {
            if (node.right === null) {
                return false
            } else {
                let nxt_node = node.right
                if (nxt_node.value === value) {
                    node.right = this.deleteItem(value, nxt_node)
                    return true
                }
                return this.deleteIter(value, nxt_node)
            }
        }
    }

    find(value) {
        return this.findIter(value, this.root)
    }

    findIter(value, node = this.root) {
        if (node === null) return;
        if (node.value === value) return node
        if (value < node.value) {
            return this.findIter(value, node.left)
        } else {
            return this.findIter(value, node.right)
        }
    }

    levelOrderForEach(arr = [], queue = [], node = this.root) {
        if (node === null) return;
        arr.push(node.value);
        queue.push(node.left);
        queue.push(node.right);
        while (queue.length) {
            const level = queue[0];
            queue.shift();
            this.levelOrderForEach(arr, queue, level)
        }
        return arr;
    }

    inOrderForEach(arr = [], node = this.root) {
        if (node === null) return;
        if (node.left) this.inOrderForEach(arr, node.left);
        arr.push(node.value);
        if (node.right) this.inOrderForEach(arr, node.right);
        return arr;
    }

    preOrderForEach(arr = [], node = this.root) {
        if (node === null) return;
        arr.push(node.value);
        if (node.left) this.preOrderForEach(arr, node.left);
        if (node.right) this.preOrderForEach(arr, node.right);
        return arr;
    }

    postOrderForEach(arr = [], node = this.root) {
        if (node === null) return;
        if (node.left) this.postOrderForEach(arr, node.left);
        if (node.right) this.postOrderForEach(arr, node.right);
        arr.push(node.value);
        return arr;
    }

    depth(value, node = this.root, curr_depth = 0) {
        if (node === null) return null;
        if (node.value === value) return curr_depth;
        if (value < node.value) {
            return this.depth(value, node.left, curr_depth + 1)
        } else {
            return this.depth(value, node.right, curr_depth + 1)
        }
    }

    height(value) {
        let node = this.find(value)
        return this.heightNode(node)
    }

    heightNode(node = this.root) {
        if (node === null) return 0;

        let leftHeight = this.heightNode(node.left);
        let rightHeight = this.heightNode(node.right);

        if (leftHeight > rightHeight) {
            return leftHeight + 1;
        } else {
            return rightHeight + 1;
        }
    }

    isBalanced(node = this.root) {
        if (node === null) return true

        // Check if nodes are balanced
        let leftBalanced = this.isBalanced(node.left)
        let rightBalanced = this.isBalanced(node.right)

        if (!(leftBalanced && rightBalanced)) return false

        // Compare heights of nodes - could be done together for optimization
        let leftHeight = this.heightNode(node.left);
        let rightHeight = this.heightNode(node.right);
        if (leftHeight > rightHeight) {
            return leftHeight <= rightHeight + 1;
        } else {
            return leftHeight + 1 >= rightHeight;
        }
    }

    rebalance() {
        this.root = this.buildTree(this.inOrderForEach())
    }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null) return
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
};

let tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
prettyPrint(tree.root)

tree.insert(6)
tree.insert(324)
tree.insert(0)
prettyPrint(tree.root)

console.log(tree.delete(7))
prettyPrint(tree.root)

console.log(tree.delete(6))
prettyPrint(tree.root)
console.log(tree.delete(7))
console.log(tree.delete(4))
prettyPrint(tree.root)
console.log(tree.delete(8))
prettyPrint(tree.root)

console.log(tree.find(324))
console.log(tree.find(323))
console.log(tree.find(9))

console.log('Level order: ', tree.levelOrderForEach())
console.log('In order: ', tree.inOrderForEach())
console.log('Pre order: ', tree.preOrderForEach())
console.log('Post order: ', tree.postOrderForEach())

console.log('Depth of 9: ', tree.depth(9))
console.log('Depth of 324: ', tree.depth(324))
console.log('Depth of 3: ', tree.depth(3))
console.log('Depth of 4: ', tree.depth(4))

console.log('Height of 9: ', tree.height(9))
console.log('Height of 324: ', tree.height(324))
console.log('Height of 3: ', tree.height(3))
console.log('Height of 4: ', tree.height(4))

console.log('Balanced before rebalancing: ', tree.isBalanced())
tree.rebalance()
prettyPrint(tree.root)
console.log('Balanced after rebalancing: ', tree.isBalanced())
