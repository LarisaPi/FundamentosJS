const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
ctx.font = '24px serif';

const scoreDisplay = document.createElement('div');
scoreDisplay.style.position = 'absolute';
scoreDisplay.style.top = '10px';
scoreDisplay.style.left = '10px';
scoreDisplay.style.fontSize = '24px';
document.body.appendChild(scoreDisplay);

const highScoreDisplay = document.createElement('div');
highScoreDisplay.style.position = 'absolute';
highScoreDisplay.style.top = '40px';
highScoreDisplay.style.left = '10px';
highScoreDisplay.style.fontSize = '24px';
document.body.appendChild(highScoreDisplay);

let score = 0;
let highScore = 0; // Variable para almacenar el puntaje más alto
let gameOver = false;

const Snake = [
    { x: 2, y: 1, show: function() { ctx.fillText('🤑', this.x * 20, this.y * 20); } },
    { x: 1, y: 1, show: function() { ctx.fillText('🤑', this.x * 20, this.y * 20); } },
    { x: 0, y: 1, show: function() { ctx.fillText('🤑', this.x * 20, this.y * 20); } }
];

let x = 2;
let y = 1;
let direction = 1;

const food = {
    x: 5,
    y: 5,
    show: function() {
        ctx.fillText('💎', this.x * 20, this.y * 20);
    },
    fadeIn: function() {
        do {
            this.x = Math.floor(Math.random() * 30);
            this.y = Math.floor(Math.random() * 20) + 1;
        } while (this.isFoodOnSnake());
    },
    isFoodOnSnake: function() {
        return Snake.some(segment => segment.x === this.x && segment.y === this.y);
    }
};

function eat() {
    if (Snake[0].x === food.x && Snake[0].y === food.y) {
        food.fadeIn();
        Snake.push({ ...Snake[Snake.length - 1] });
        score++;
    }
}

function checkCollision() {
    for (let i = 1; i < Snake.length; i++) {
        if (Snake[i].x === Snake[0].x && Snake[i].y === Snake[0].y) {
            return true;
        }
    }
    return false;
}

function nextMove() {
    for (let i = Snake.length - 1; i > 0; i--) {
        Snake[i].x = Snake[i - 1].x;
        Snake[i].y = Snake[i - 1].y;
    }
    Snake[0].x = x;
    Snake[0].y = y;
}

function resetGame() {
    Snake.length = 3;
    Snake[0] = { x: 2, y: 1, show: function() { ctx.fillText('🤑', this.x * 20, this.y * 20); } };
    Snake[1] = { x: 1, y: 1, show: function() { ctx.fillText('🤑', this.x * 20, this.y * 20); } };
    Snake[2] = { x: 0, y: 1, show: function() { ctx.fillText('🤑', this.x * 20, this.y * 20); } };
    x = 4;
    y = 1;
    direction = 1;
    score = 0;
    gameOver = false;
    food.fadeIn();
    startGame();
}

function startGame() {
    const gameInterval = setInterval(() => {
        if (gameOver) {
            clearInterval(gameInterval);
            showGameOver();
            return;
        }

        ctx.clearRect(0, 0, 600, 400);
        nextMove();
        food.show();
        Snake.forEach(s => s.show());
        eat();
        scoreDisplay.textContent = `Puntaje: ${score}`;
        highScoreDisplay.textContent = `Puntaje más alto: ${highScore}`;
        scoreDisplay.className = 'scoreDisplay'; 
        scoreDisplay.style.top = '15%';
        scoreDisplay.style.left = '38%';
        scoreDisplay.style. color= '#2285f5';
        highScoreDisplay.className = 'highScoreDisplay';
        highScoreDisplay.style.top = '15%';
        highScoreDisplay.style.left = '38%';
        highScoreDisplay.style. color= '#2285f5';

        if (checkCollision()) {
            gameOver = true;
        }

        if (direction === 1) x++;
        else if (direction === 2) x--;
        else if (direction === 3) y++;
        else if (direction === 4) y--;

        if (x > 29) x = 0;
        else if (x < 0) x = 29;
        if (y > 20) y = 1;
        else if (y < 1) y = 20;
    }, 150);
}

function showGameOver() {
    ctx.fillStyle = 'black';
    ctx.fillText('¡Perdiste!', 200, 150);
    ctx.fillText(`Puntos: ${score}`, 200, 200);
    ctx.fillText(`Puntaje más alto: ${highScore}`, 200, 250); // Mostrar el puntaje más alto al perder

    if (score > highScore) {
        highScore = score; // Actualizar el puntaje más alto
    }

    const button = document.createElement('button');
    button.innerText = 'Reiniciar';
    button.classList.add('restartButton'); // Agrega la clase para estilos
    document.body.appendChild(button);
    button.addEventListener('click', () => {
        document.body.removeChild(button);
        resetGame();
    });
}

food.fadeIn();
startGame();

document.querySelector('body')
    .addEventListener('keydown', e => {
        if (e.key == 'ArrowRight') direction = 1;
        else if (e.key == 'ArrowDown') direction = 2;
        else if (e.key == 'ArrowLeft') direction = 3;
        else if (e.key == 'ArrowUp') direction = 4;
    });
