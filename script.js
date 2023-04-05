document.body.onload = drawGrid(16);
document.getElementById('input').value = '';

let color = 'black';

function drawGrid(gridSize) {
    let grid = document.querySelector('.grid');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    let amount = gridSize * gridSize;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'white';
        grid.insertAdjacentElement('beforeend', square);
        square.setAttribute('id', 'square');
    }
}

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        document.querySelector('.error').style.display = 'none';
        drawGrid(input);
    } else {
        document.querySelector('.error').style.display = 'inline';
    }
}

function colorSquare() {
    this.style.transition = '0.5s';
    this.style.backgroundColor = color;
}

function changeColor(input) {
    color = input;
}

function resetGrid() {
    let grid = document.querySelector('.grid');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => (div.style.backgroundColor = 'white'));
}