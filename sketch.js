function setup() {
  createCanvas(400, 400);
}

let xJogador0 = 0;
let xJogador1 = 0;
let xJogador2 = 0;

let xJogador = [0,0,0,];

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#D2EBB5");
  } else {
    background("rgb(238,178,178)");
  }
}

function desenhaJogadores() {
  textSize(40);
  text("🦈", xJogador[0],100);
  text("🦭", xJogador[1],200);
  text("🌸", xJogador[2],300);
}



function desenhaLinhaDeChegada() {
  rect(350, 0, 10, 400);
}

function verificaVencedor() {
  if (xJogador[0]> 350) {
    text("Jogador [0]venceu!", 50, 200);
    noLoop();
  }
  if (xJogador[1]> 350) {
    text("Jogador [1]venceu!", 50, 200);
    noLoop();
  }
  if (xJogador[2]> 350) {
    text("Jogador [2]venceu!", 50, 200);
    noLoop();
      }
  
}
function keyReleased() {
  if (key == "a") {
    xJogador[0] +=random(10);
  }
  if (key == "s") {
    xJogador[1] +=random(10);
  } 
  if (key == "w") {
    xJogador[2] +=random(10);
     }  
  
}

let yJogador = [75, 150, 225, 300];
let jogador = ["🦭", "🦈", "🌸",];
let teclas = ["a", "s", "d", ];
let quantidade = jogador.length;


function keyReleased() {
  for (let i = 0; i < quantidade; i++) {
    if (key == "a") {
      xJogador[0] += random(20);
    }
  }
}