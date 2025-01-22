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
    row.style.fontSize = 'x-large';
    return row
}


function createButton(text, row, mult=1, col='rgb(120 120 255)') {
    let cell = document.createElement('div');
    cell.className = 'el';
    cell.style.border = 'solid';
    cell.style.borderWidth = '1px';
    cell.style.flex = 'none';
    if (mult === 2) {
        cell.style.width = '102px'
    } else if (mult === 3) {
        cell.style.width = '154px'
    } else {
        cell.style.width = '50px'
    }
    cell.innerText = text;
    cell.style.backgroundColor = col;
    cell.style.alignContent = 'center';
    cell.style.textAlign = 'center';
    // cell.addEventListener("mouseover", changeColor, false);
    row.appendChild(cell);
}



function createGrid() {

    let disp = createRow();
    createButton(num1, disp, 1, 'rgb(255 255 255)');
    createButton('', disp,1, 'rgb(255 255 255)');
    createButton(num2, disp, 2, 'rgb(255 255 255)');
    disp.style.fontSize = 'xx-large';

    let row = createRow();
    createButton(7, row);
    createButton(8, row);
    createButton(9, row);
    createButton('%', row, 1, 'rgb(180 180 180)');

    row = createRow();
    createButton(4, row);
    createButton(5, row);
    createButton(6, row);
    createButton('x', row, 1, 'rgb(180 180 180)');

    row = createRow();
    createButton(1, row);
    createButton(2, row);
    createButton(3, row);
    createButton('-', row, 1, 'rgb(180 180 180)');

    row = createRow();
    createButton('<=', row, 1, 'rgb(255 120 120)');
    createButton(0, row);
    createButton('.', row, 1, 'rgb(180 180 180)');
    createButton('+', row, 1, 'rgb(180 180 180)');

    row = createRow();
    createButton('clr', row, 1, 'rgb(255 120 120)');
    createButton('=', row, 3, 'rgb(120 255 120)');

}

createGrid();
