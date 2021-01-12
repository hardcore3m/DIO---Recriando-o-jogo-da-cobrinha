let canvas = document.getElementById("snake");
//renderiza o que vai acontecer no canvas trata o elemento como plano 2d
let context = canvas.getContext("2d");
let box = 32;

let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box

}

function criarBG() {
    //Preenche com estilo, no caso bg verde
    context.fillStyle = 'lightgreen';
    //Fillrect - Desenha onde vai acontecer o evento Parâmetros (posição X, posição Y, altura, largura)
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
    //percorre todo o array incrementando
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}
criarBG();
criarCobrinha();