function fibs(n) {
    if (n===1) {
        return [0]
    } else if (n===2) {
        return [0, 1]
    } else if (n===0) {
        return []
    } else {
        let curr1 = 0
        let curr2 = 1
        let res = [curr1, curr2]
        for (let i = 2; i < n; i++) {
            let new_val = curr1 + curr2
            curr1 = curr2
            curr2 = new_val
            res.push(curr2)

        }
        return res
    }
}

function fibsRec(n) {
    if (n===1) {
        return [0]
    } else if (n===2) {
        return [0, 1]
    } else if (n===0) {
        return []
    } else {
        let res = fibsRec(n-1)
        let new_val = res[n-2] + res[n-3]
        res.push(new_val)
        return res
    }
}

let n = 20
console.log(fibs(20))
console.log(fibsRec(20))
