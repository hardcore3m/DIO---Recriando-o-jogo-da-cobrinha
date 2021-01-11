let canvas=document.getElementById("snake");
//renderiza o que vai acontecer no canvas trata o elemento como plano 2d
let context = canvas.getContext("2d");
let box = 32;

function criarBG() {
    //Preenche com estilo, no caso bg verde
    context.fillStyle = 'lightgreen';
    //Fillrect - Desenha onde vai acontecer o evento Parâmetros (posição X, posição Y, altura, largura)
    context.fillRect(0,0,16 * box, 16*box);
}
criarBG();