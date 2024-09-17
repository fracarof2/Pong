//variveis bolinha
let xBolinha = 200;
let yBolinha = 200;
let diametro = 30;

let velocidadeXBolinha=6;
let velocidadeYBolinha=6;
 
//variaveis minha raquete
let xRaquetejogador=5;
let yRaquetejogador=15;
let alturaRaquetejogador=20;
let larguraRaquetejogador=10;

// variaveis raquete oponente
let xRaqueteOponente=385;
let yRaqueteOponente=15;
let alturaRaqueteOponente=20;
let larguraRaqueteOponente=10;

let velocidadeyOponente





//colisao
let colidiu = false;





let posicaoHorizontal; //x
let posicaoVertical; //y


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("black");
  mostrarBolinha();
  movimentaBolinha();
  verificaColisaoRaquetejogador();
  mostrarRaquetejogador();
  movimentaRaquetejogador();
  mostraRaqueteOponente();
  movimentaRaqueteOponente();
  
  
}

      function mostrarBolinha(){
        circle(xBolinha,yBolinha,diametro);
        fill("red")}
        

  function  movimentaBolinha(){
   xBolinha+= velocidadeXBolinha;
   yBolinha+= velocidadeYBolinha;
    
    
  }
        
       //xbolinha=xbolinha=velocidadebolinha 
     //  xbolinha=xbolinha=velocidadebolinha
        
      function verificaColisao(){
      if(xBolinha>width||xBolinha<0);  
      {velocidadexBolinha*=-1;}  
        
        if(yBolinha>height||yBolinha<0);  
      {velocidadeyBolinha*=-1;}  
        
        
      }
        
   function  mostraRaquetejogador(){
       fill('pink')
rect(xRaquetejogador,yRaquetejogador,larguraRaquetejogador,alturaRaquetejogador); 
//  stroke('pink');       
}
        
  function movimentaRaquetejogador(){
        if(keyIsDown(UP_ARROW)){
          yRaquetejogaor-=10;}
        
          if(keyIsDown(DOWN_ARROW)){
          yRaquetejogaor+=10;}
               
        }
        
 function verificaColisaoRaquetejogador(){
 colidiu = collideRectCircle(
 xRaquetejogador,   
 yRaquetejogador,
  alturaRaquetejogador,
 larguraRaquetejogador, 
 xBolinha,
 yBolinha,
 diametro/2);
 if(colidiu ==true){
   velocidadexBolinha *=-1
   
   
 }
       
       
       
     }
  
  function  mostraRaqueteOponente(){
       fill('pink')
rect(xRaqueteOponente,yRaqueteOponente,larguraRaqueteOponente,alturaRaqueteOponente); 
//  stroke('pink');       
}
 
function movimentaRaqueteOponente(){
  velocidadeyOponente= YBolinha - yRaqueteOponente-
alturaRaqueteOponente/2 - 30;
  yRaqueteOponente += velocidadeyOponente

}

 function verificaColisaoRaqueteOponente(){
 colidiu = collideRectCircle(
 xRaqueteOponente,   
 yRaqueteOponente,
  alturaRaqueteOponente,
 larguraRaqueteOponente, 
 xBolinha,
 yBolinha,
 diametro/2);
 if(colidiu ==true){
   velocidadexBolinha *=-1
 }
}




















