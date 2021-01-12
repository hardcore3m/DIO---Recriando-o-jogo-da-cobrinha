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

function iniciarJogo() {
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    //retira o último elemento do array
    snake.pop();
    //acrescenta elemento a frente
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);

}

//A cada 100 milisegundos a iniciar jogo é renovada para dar continuidade ao jogo
let jogo = setInterval(iniciarJogo, 100);