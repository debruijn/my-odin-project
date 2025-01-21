// Plan:
// - Get container reference
// - Create square divs and add to container as a 4x4 grid (or flexible?)
// - Use flexbox in specifying how to show them
// - Add the hover effect to change the color when mouse pointer moves over a grid
// - Allow for overwrite of grid with new grid based on numeric input
// - Make grid random color when going through grid
// - Make square darker by 10%

const container = document.querySelector("#container");
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.justifyContent = 'center';
container.style.flex = 'auto';
container.style.height = '100%';
let size = 100;

function changeColor(event) {
    event.target.style.backgroundColor = 'black';
}

function getSize() {
    let res = prompt("How many elements do you want in each row and column? [1-100]")
    clearGrid(size);
    size = Math.min(Math.max(parseInt(res), 1), 100);
    createGrid(size);
}

function clearGrid(size) {
    for (let i = size-1; i >= 0; i--) {
        container.children[i].remove();
    }
}

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div')
        row.className = 'row';
        row.style.display = 'flex';
        row.style.flex = 'auto';
        row.style.flexDirection = 'row';
        row.style.justifyContent = 'center';
        container.appendChild(row)
        for (let j = 0; j < size; j++) {
            let cell = document.createElement('div');
            cell.className = 'el';
            cell.style.border = 'dotted';
            cell.style.borderWidth = 'thin';
            cell.style.flex = 'auto';
            cell.innerText = '';
            cell.addEventListener("mouseover", changeColor, false);
            row.appendChild(cell);
        }
    }
}

container.addEventListener("click", getSize, false)
createGrid(size);