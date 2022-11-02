var canvas = document.getElementById("meu_canvas");
var contexto = canvas.getContext("2d");
var cor = "";
var largura_da_linha = 5;
var ultima_pos_X, ultima_pos_Y;
var largura_da_tela = screen.width;
var nova_largura_da_tela = largura_da_tela-70;
var altura_da_tela = screen.height;
var nova_altura_da_tela = altura_da_tela-300;

if(largura_da_tela<992){
    canvas.width=nova_largura_da_tela;
    canvas.height=nova_altura_da_tela;
    document.body.style.overflow ="hidden";
}

canvas.addEventListener("touchstart", inicio_toque);

function inicio_toque(evento){
    console.log("O toque começou");
    ultima_pos_X = evento.touches[0].clientX - canvas.offsetLeft;
    ultima_pos_Y = evento.touches[0].clientY - canvas.offsetTop;

    cor =document.getElementById("cor").value;
    largura_da_linha =document.getElementById("largura").value;
}

canvas.addEventListener("touchmove", movendo_toque);

function movendo_toque(evento){
    console.log("Movendo o toque");
    var posicao_X = evento.touches[0].clientX - canvas.offsetLeft;
    var posicao_Y = evento.touches[0].clientY - canvas.offsetTop;

    contexto.beginPath();
    contexto.strokeStyle = cor;
    contexto.lineWidth = largura_da_linha;
    contexto.moveTo(ultima_pos_X, ultima_pos_Y);
    contexto.lineTo(posicao_X, posicao_Y);
    contexto.stroke();

    ultima_pos_X = posicao_X;
    ultima_pos_Y = posicao_Y;
}

function Apagar(){
    contexto.clearRect(0, 0, contexto.canvas.width, contexto.canvas.height);
}