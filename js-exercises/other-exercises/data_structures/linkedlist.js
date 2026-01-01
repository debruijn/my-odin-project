export class LinkedList {
    constructor() {
        this.nextNode = null
    }

    append(value) {
        let newNode = new Node()
        newNode.value = value

        let curr = this
        while (curr.nextNode !== null) {
            curr = curr.nextNode
        }
        curr.nextNode = newNode
    }

    prepend(value) {
        let newNode = new Node()
        newNode.value = value
        newNode.nextNode = this.nextNode
        this.nextNode = newNode
    }

    insertAt(value, index) {
        let newNode = new Node()
        newNode.value = value

        let curr = this
        let count = 0
        while ((curr.nextNode !== null) && (count < index)) {
            curr = curr.nextNode
            count += 1
        }
        if (count === index) {
            newNode.nextNode = curr.nextNode
            curr.nextNode = newNode
        }
    }

    removeAt(index) {
        let curr = this
        let count = 0
        while ((curr.nextNode !== null) && (count < index)) {
            curr = curr.nextNode
            count += 1
        }
        if (count === index) {
            curr.nextNode = curr.nextNode.nextNode
        }
    }

    size() {
        let curr = this
        let count = 0
        while (curr.nextNode !== null) {
            curr = curr.nextNode
            count += 1
        }
        return count
    }

    head() {
        return this.nextNode
    }

    tail() {
        let curr = this
        while (curr.nextNode !== null) {
            curr = curr.nextNode
        }
        return curr
    }

    at(index) {
        let curr = this
        let count = 0
        while ((curr.nextNode !== null) && (count < index)) {
            curr = curr.nextNode
            count += 1
        }
        if (count === index) {
            return curr
        } else {
            return null
        }
    }

    pop() {
        let curr = this
        while (curr.nextNode !== null) {
            if (curr.nextNode.nextNode === null) {
                let res = curr.nextNode
                curr.nextNode = null
                return res
            }
        }
    }

    pop_first() {
        if (this.nextNode == null) {
            return null
        }
        let first = this.nextNode
        this.nextNode = this.nextNode.nextNode
        return first
    }

    pop_first_val() {
        let node = this.pop_first()
        if (node == null) {
            return null
        }
        return node.value
    }

    contains(value) {
        let curr = this
        while (curr.nextNode !== null) {
            curr = curr.nextNode
            if (curr.value === value) {
                return true
            }
        }
        return false
    }

    find(value) {
        let curr = this
        let count = 0
        while (curr.nextNode !== null) {
            curr = curr.nextNode
            count += 1
            if (curr.value === value) {
                return count
            }
        }
        return null
    }

    set_using_first(key, value) {
        let curr = this
        while (curr.nextNode !== null) {
            curr = curr.nextNode
            if (curr.value[0] === key) {
                curr.value = [key, value]
                return true
            }
        }
        this.append([key, value])
        return false
    }

    get_using_first(value) {
        let curr = this
        let count = 0
        while (curr.nextNode !== null) {
            curr = curr.nextNode
            count += 1
            if (curr.value[0] === value) {
                return curr.value[1]
            }
        }
        return null
    }

    has_using_first(value) {
        let curr = this
        let count = 0
        while (curr.nextNode !== null) {
            curr = curr.nextNode
            count += 1
            if (curr.value[0] === value) {
                return true
            }
        }
        return false
    }

    remove_using_first(value) {
        let curr = this
        while (curr.nextNode !== null) {
            if (curr.nextNode.value[0] === value) {
                curr.nextNode = curr.nextNode.nextNode
                return true
            }
            curr = curr.nextNode
        }
        return false
    }

    get_all_first() {
        let all_first = Array()
        let curr = this
        while (curr.nextNode !== null) {
            curr = curr.nextNode
            all_first.push(curr.value[0])
        }
        return all_first
    }

    get_all() {
        let all_first = Array()
        let curr = this
        while (curr.nextNode !== null) {
            curr = curr.nextNode
            all_first.push(curr.value)
        }
        return all_first
    }

    toString() {
        let str = ""
        let curr = this
        while (curr.nextNode !== null) {
            curr = curr.nextNode
            str += "( " + curr.value + " ) -> "
        }
        str += "null"

        return str
    }

}

class Node {
    constructor() {
        this.value = null
        this.nextNode = null
    }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString())

list.insertAt("flamingo", 2)
console.log(list.toString())

list.removeAt(4)
console.log(list.toString())

console.log(list.contains("flamingo"))
console.log(list.find("flamingo"))
console.log(list.contains("rat"))

console.log(list.size())
