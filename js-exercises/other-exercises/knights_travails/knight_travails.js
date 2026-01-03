class KnightMoveDistances {
    constructor() {
        this.history = new Set()  // []
        this.queue = []
    }

    findDistance(x, y) {
        let moves = [[1, 2], [2, 1], [1, -2], [2, -1], [-1, 2], [-2, 1], [-1, -2], [-2, -1]]
        this.queue = [[x, 0, []]]
        this.history = new Set()
        while (this.queue.length > 0) {
            let [this_loc, this_steps] = this.queue.shift()

            if ((this_loc[0] === y[0]) && (this_loc[1] === y[1])) {
                return "From " + x + " to " + y + " in " + this_steps + " steps"
            }

            for (let move of moves) {
                let new_loc = [this_loc[0] + move[0], this_loc[1] + move[1]]
                if ((new_loc[0] < 0) || (new_loc[0] >= 8) || new_loc[1] < 0 || new_loc[1] >= 8) {
                    continue
                }
                if (this.history.has(new_loc)) {
                    continue
                }
                this.queue.push([new_loc, this_steps + 1])
                this.history.add(new_loc)
            }

        }

    }
}

let distances = new KnightMoveDistances()
console.log(distances.findDistance([0, 0], [3, 3]))
console.log(distances.findDistance([0, 0], [7, 7]))
console.log(distances.findDistance([3, 3], [4, 3]))
