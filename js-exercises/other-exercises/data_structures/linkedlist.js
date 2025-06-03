class LinkedList {
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
