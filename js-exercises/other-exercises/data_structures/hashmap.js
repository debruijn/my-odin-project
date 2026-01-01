import {LinkedList} from './linkedlist.js'


class HashMap {
    constructor() {
        this.loadFactor = 0.75
        this.capacity = 16
        this.buckets = Array.from({length: this.capacity}, () => new LinkedList())
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode % this.capacity;
    }

    update_capacity(new_capacity) {
        if (this.capacity === new_capacity) return
        if (this.capacity > new_capacity) return  // TODO also allow map to become smaller?
        this.capacity = new_capacity

        let old_buckets = this.buckets
        this.buckets = Array.from({length: this.capacity}, () => new LinkedList())
        for (let [i, bucket] of old_buckets.entries()) {
            let nxt = bucket.pop_first_val()
            while (nxt !== null) {
                this.set(nxt[0], nxt[1])
                nxt = bucket.pop_first_val()
            }
        }

    }

    set(key, value) {
        let key_hash = this.hash(key)
        let bucket = this.buckets[key_hash]
        let updated = bucket.set_using_first(key, value)
        if (!updated) {
            if (this.length() > this.loadFactor * this.capacity) {
                this.update_capacity(this.capacity * 2)
            }
        }
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

    remove(key) {
        let key_hash = this.hash(key)
        let bucket = this.buckets[key_hash]
        return bucket.remove_using_first(key)
    }

    toString() {
        let str = ""
        for (let [i, bucket] of this.buckets.entries()) {
            str += i + ': ' + bucket.toString() + '\n'
        }
        return str
    }

    length() {
        return this.buckets.reduce((acc, element) => acc + element.size(), 0);
    }

    clear() {
        this.buckets = Array.from({length: this.capacity}, () => new LinkedList())
    }

    keys() {
        let keys = Array()
        for (let bucket of this.buckets) {
            keys.push(bucket.get_all_first())
        }
        return keys.flat()
    }

    values() {
        return this.entries().map(x => x[1])
    }

    entries() {
        let elements = Array()
        for (let bucket of this.buckets) {
            elements.push(bucket.get_all())
        }
        elements = elements.flat()
        return elements
    }
}

const test = new HashMap()

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.toString())

console.log(test.get('banana'))
console.log(test.has('carrot'))
console.log(test.has('papaya'))
test.set('lion', 'goldenish')

console.log(test.toString())
console.log(test.length())

test.set('moon', 'silver')
console.log(test.toString())
console.log(test.length())

console.log(test.keys())
console.log(test.values())
console.log(test.entries())