import { LinkedList } from './linkedlist.js'


class HashMap {
    constructor() {
        this.loadFactor = 0.75
        this.capacity = 4
        this.buckets = [new LinkedList(), new LinkedList(), new LinkedList(), new LinkedList()]
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode % this.capacity;
    }

    set(key, value) {
        let key_hash = this.hash(key)
        this.buckets[key_hash].append([key, value])
        // TODO implement growth
    }

    get(key) {
        let key_hash = this.hash(key)
        let bucket = this.buckets[key_hash]
        return bucket.get_using_first(key)
    }

    has(key) {
        let key_hash = this.hash(key)
        let bucket = this.buckets[key_hash]
        return bucket.has_using_first(key)
    }

    toString() {
        let str = ""
        for (let [i, bucket] of this.buckets.entries()) {
            str += i + ': ' + bucket.toString() + '\n'
        }

        return str
    }

}

const test = new HashMap()

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')

console.log(test.toString())

console.log(test.get('banana'))
console.log(test.has('carrot'))
console.log(test.has('papaya'))