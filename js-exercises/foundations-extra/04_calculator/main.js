const add = function(a, b) {
    return a + b
};

const subtract = function(a, b) {
    return a - b
};

const multiply = function(a, b) {
    return a * b
};

const divide = function(a, b) {
    return a / b
};

let num1 = 0, num2 = 0, op = add;

const operate = function(op, num1, num2) {
    return op(num1, num2)
}


const container = document.querySelector("#container");
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.justifyContent = 'center';
container.style.flex = 'auto';
container.style.height = '100%';


function createRow() {
    let row = document.createElement('div')
    row.className = 'row';
    row.style.display = 'flex';
    row.style.flex = 'none';
    row.style.height = '50px'
    row.style.flexDirection = 'row';
    row.style.justifyContent = 'center';
    container.appendChild(row)
    return row
}


function createButton(text, row) {
    let cell = document.createElement('div');
    cell.className = 'el';
    cell.style.border = 'solid';
    cell.style.borderWidth = 'thin';
    cell.style.flex = 'none';
    cell.style.width = '50px'
    cell.innerText = text;
    cell.style.fontSize = 'x-large';
    cell.style.alignContent = 'center';
    cell.style.textAlign = 'center';
    // cell.addEventListener("mouseover", changeColor, false);
    row.appendChild(cell);
}


function createGrid() {
    let row = createRow();
    createButton(7, row);
    createButton(8, row);
    createButton(9, row);
    createButton('%', row);

    row = createRow();
    createButton(4, row);
    createButton(5, row);
    createButton(6, row);
    createButton('x', row);

    row = createRow();
    createButton(1, row);
    createButton(2, row);
    createButton(3, row);
    createButton('-', row);

    row = createRow();
    createButton(0, row);
    createButton('.', row);
    createButton('<=', row);
    createButton('+', row);

}

createGrid();

// Grid design:
// 3x3 for nums
// extra row: 0, decimal point, backspace
// ops next to nums
// big enter below, with smaller clear
// display above, showing prev num, operator, and curr num