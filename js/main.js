let canvas = document.getElementById("snake");
//renderiza o que vai acontecer no canvas trata o elemento como plano 2d
let context = canvas.getContext("2d");
let box = 32;

let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box

}
//Direção da cobrinha
let direction = "right";
//Cria a food e randomiza posição
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG() {
    //Preenche com estilo, no caso bg verde
    context.fillStyle = 'lightgreen';
    //Fillrect - Desenha onde vai acontecer o evento Parâmetros (posição X, posição Y, altura, largura)
    context.fillRect(0, 0, 16 * box, 16 * box);
}
//Atualiza o jogo de tempos em tempos

function criarCobrinha() {
    //percorre todo o array incrementando
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}
//Chama o evento ao clicar no botao
document.addEventListener('keydown', update);

/*Mapeia da direção da cobra com os botoes e faz com que ela nao vá ao contrario
informando que a direção não pode ser oposta*/
function update(event) {
    if (event.keyCode == 37 && direction != "right") direction = "left";
    if (event.keyCode == 38 && direction != "down") direction = "up";
    if (event.keyCode == 39 && direction != "left") direction = "right";
    if (event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo() {
    /*Plano Cartesiano faz com que a cobra reapareça do outro lado.
    Quando chega no ponto zero do plano cartesiano ela inicia no 16 e vice-versa*/
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 * box && direction == "left") snake[0].x = 15;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 * box && direction == "up") snake[0].y = 15;
    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    //Quando come a comida ela aumenta de tamanho
    if (snakeX != food.x || snakeY != food.y) {
        //retira o último elemento do array
        snake.pop();
    }
    else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box
    }
    //acrescenta elemento a frente
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);

}

//A cada 100 milisegundos a iniciar jogo é renovada para dar continuidade ao jogo
let jogo = setInterval(iniciarJogo, 100);