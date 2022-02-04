// Criação das variaveis do jogo
var trex ,trex_running;


// Carregamento das imagens e animação
function preload(){
  //carregamento animação trex correndo
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

}
// Criando a configuração do jogo
function setup(){
  // Criando a tela do jogo
  createCanvas(600,200);
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  // Adicionar a animação
  trex.addAnimation("running", trex_running);
  trex.scale=0.5;
}
// Criando os desenhos e tudo que repete ao longo do jogo
function draw(){
  // para criar fundo
  background("white");

  //para o salto do trex
if (keyDown("space")){
  trex.velocityY= -10;
}

// Gravidade do trex.
trex.velocityY=trex.velocityY+0.5;

  drawSprites();

}