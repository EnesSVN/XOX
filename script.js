const blocks = document.querySelectorAll('.block');
const playerText = document.querySelector('#player');
const errorText = document.querySelector('#error');
let player = 'X';
gameOver = false;
let winner;

function startGame() {
    playerText.textContent = `${player}'s turn`;


    blocks.forEach(block => block.addEventListener('click', () => chooserArea(block)));
}

function chooserArea(block) {
    if (block.textContent === '') {
        block.textContent = player;
        turnPlayer();

    } else {
        errorText.textContent = 'This area is already taken';
        block.style.border = "2px solid red";
        setTimeout(() => {
            errorText.textContent = '';
            block.style.border = "1px solid black";

        }, 2500);
    }
    checkWin();
    checkTie();
    if (gameOver) {
        playerText.textContent = `${winner} wins!`;
        blocks.forEach(block => block.style.pointerEvents = 'none');
    }
}
function turnPlayer() {
    if (player === 'X') {
        player = 'O';
        playerText.textContent = `${player}'s turn`;

    } else {
        player = 'X';
        playerText.textContent = `${player}'s turn`;

    }

}

function checkWin() {
    checkRows();
    checkColumns();
    checkDiagonals();
}
function checkTie() {
    const values = [];
    blocks.forEach(block => values.push(block.textContent));
    if (!values.includes('')) {
     
        playerText.textContent = 'Tie!';
        blocks.forEach(block => block.style.pointerEvents = 'none');

    }

}

function checkRows() {
    let row1 = blocks[0].textContent === blocks[1].textContent &&
        blocks[1].textContent === blocks[2].textContent && blocks[0].textContent !== '';
    let row2 = blocks[3].textContent === blocks[4].textContent &&
        blocks[4].textContent === blocks[5].textContent && blocks[3].textContent !== '';
    let row3 = blocks[6].textContent === blocks[7].textContent &&
        blocks[7].textContent === blocks[8].textContent && blocks[6].textContent !== '';

    if (row1 || row2 || row3) {

        gameOver = true
    }
    if (row1) {
        console.log('row1');
        winner = blocks[0].textContent
    }
    if (row2) {
        console.log('row2');
        winner = blocks[3].textContent
    }
    if (row3) {
        console.log('row3');
        winner = blocks[6].textContent
    }


}
function checkColumns() {
    let col1 = blocks[0].textContent == blocks[3].textContent &&
        blocks[0].textContent == blocks[6].textContent && blocks[0].textContent !== ""
    let col2 = blocks[1].textContent == blocks[4].textContent &&
        blocks[1].textContent == blocks[7].textContent && blocks[1].textContent !== ""
    let col3 = blocks[2].textContent == blocks[5].textContent &&
        blocks[2].textContent == blocks[8].textContent && blocks[2].textContent !== ""

    if (col1 || col2 || col3) {
        gameOver = true
    }
    if (col1) return winner = blocks[0].textContent
    if (col2) return winner = blocks[1].textContent
    if (col3) return winner = blocks[2].textContent
}

function checkDiagonals() {
    let dia1 = blocks[0].textContent == blocks[4].textContent &&
        blocks[0].textContent == blocks[8].textContent && blocks[0].textContent !== ""
    let dia2 = blocks[2].textContent == blocks[4].textContent &&
        blocks[2].textContent == blocks[6].textContent && blocks[2].textContent !== ""

    if (dia1 || dia2) {
        gameOver = true
    }
    if (dia1) return winner = blocks[0].textContent
    if (dia2) return winner = blocks[2].textContent
}

startGame();