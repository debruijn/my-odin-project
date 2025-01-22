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

const operate = function(op, a, b) {
    if (op === divide && b === 0) {
        alert("Don't divide by 0, silly!")
        return 0;
    }
    return op(a, b);
}

let num1 = 0, num2 = 0, op = add;


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
    row.style.textAlign = 'center';
    return row
}


function createButton(text, row, mult=1, col='rgb(120 120 255)') {
    let cell = document.createElement('div');
    cell.className = 'el';
    cell.style.border = 'solid';
    cell.style.borderWidth = '1px';
    cell.style.flex = 'none';
    cell.style.width = 50 + 52 * (mult - 1) + 'px'
    cell.innerText = text;
    cell.style.backgroundColor = col;
    cell.style.alignContent = 'center';
    cell.addEventListener("click", numPressed, false);
    row.appendChild(cell);
}


let numPressed = function(event) {
    let txt = event.target.innerText;
    if (Number(txt) + '' === txt) {
        if (enterFirstNum) {
            if (keepDisp) {
                disp_prev.children[0].innerText = '';
                disp_prev.children[2].innerText = '0';
                keepDisp = false;
            }
            if (disp_prev.children[0].innerText === '0') {
                disp_prev.children[0].innerText = '';
            }
            disp_prev.children[0].innerText += txt;
        } else {
            if (disp_prev.children[2].innerText === '0') {
                disp_prev.children[2].innerText = '';
            }
            disp_prev.children[2].innerText += txt;
        }
    } else {
        if (txt === '=') {
            num1 = parseFloat(disp_prev.children[0].innerText);
            if (enterFirstNum) {
                lastRes = num1
                disp.children[0].innerText = lastRes;
                keepDisp = true;
                return
            }
            num2 = parseFloat(disp_prev.children[2].innerText);
            disp.children[0].innerText = op(num1, num2);
            lastRes = operate(op,num1, num2);
            disp.children[0].innerText = Math.round(lastRes*10**8) / 10**8;
            enterFirstNum = true;
            keepDisp = true;
            return
        }

        if (txt === '<=') {
            if (enterFirstNum) {
                disp_prev.children[0].innerText = disp_prev.children[0].innerText.slice(0, -1)
                if (disp_prev.children[0].innerText === '') {
                    disp_prev.children[0].innerText = '0'
                }
            } else {
                disp_prev.children[2].innerText = disp_prev.children[2].innerText.slice(0, -1)
                if (disp_prev.children[2].innerText === '') {
                    disp_prev.children[2].innerText = '0'
                }
            }
            return
        }

        if (txt === 'clr') {
            enterFirstNum = true;
            keepDisp = true;
            disp_prev.children[1].innerText = '';
            disp_prev.children[0].innerText = 0;
            disp_prev.children[2].innerText = 0;
            disp.children[0].innerText = 0;
            return
        }

        if (keepDisp) {
            disp_prev.children[0].innerText = Math.round(lastRes*10**8) / 10**8;
            disp_prev.children[2].innerText = 0
        }
        if (enterFirstNum === false) {
            num1 = parseFloat(disp_prev.children[0].innerText);
            num2 = parseFloat(disp_prev.children[2].innerText);
            lastRes = operate(op,num1, num2);
            disp.children[0].innerText = Math.round(lastRes*10**8) / 10**8;
            disp_prev.children[0].innerText = Math.round(lastRes*10**8) / 10**8;
            disp_prev.children[2].innerText = 0;

        }
        enterFirstNum = false;
        disp_prev.children[1].innerText = txt
        if (txt === '+') {
            op = add
        } else if (txt === '-') {
            op = subtract
        } else if (txt === 'x') {
            op = multiply
        } else if (txt === '%') {
            op = divide
        }
    }
}

let enterFirstNum = true;
let keepDisp = true;
let lastRes = 0;

let disp_prev = createRow();
createButton(num1, disp_prev, 1.75, 'rgb(255 255 255)');
createButton('', disp_prev,0.5, 'rgb(255 255 255)');
createButton(num2, disp_prev, 1.75, 'rgb(255 255 255)');

let disp = createRow();
createButton(num2, disp, 4, 'rgb(255 255 255)');
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
// createButton('.', row, 1, 'rgb(180 180 180)');
createButton('clr', row, 1, 'rgb(255 120 120)');
createButton('+', row, 1, 'rgb(180 180 180)');

row = createRow();
createButton('=', row, 4, 'rgb(120 255 120)');
