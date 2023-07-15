
const jugadorUno = {
    nombre: "Marce",
    habilidades: {
      ataque: 70,
      velocidad: 30,
      vida: 60,
      magia: 120,
    },
    articulos: ["espada", "escudo", "varita"],
  };
  
  const jugadorDos = {
    nombre: "Flor",
    habilidades: {
      ataque: 73,
      velocidad: 35,
      vida: 80,
      magia: 100,
    },
    articulos: ["escudo", "varita", "capa", "pocion"],
  };
  



  let contadorPuntosJug1 = 0;
  let contadorPuntosJug2 = 0;
  let ganador;
  
  
  //COMPARACIÓN POR NIVEL DE ATAQUE:
  if(jugadorUno.habilidades.ataque > jugadorDos.habilidades.ataque){
    contadorPuntosJug1++;
  }else if(jugadorUno.habilidades.ataque < jugadorDos.habilidades.ataque){
    contadorPuntosJug2++;
  }else{
    contadorPuntosJug1++;
    contadorPuntosJug2++;
  }

  //COMPARACIÓN POR MAGIA:
  if(jugadorUno.habilidades.magia > jugadorDos.habilidades.magia){
    contadorPuntosJug1++;
  }else if(jugadorUno.habilidades.magia < jugadorDos.habilidades.magia){
    contadorPuntosJug2++;
  }else{
    contadorPuntosJug1++;
    contadorPuntosJug2++;
  }

  //COMPARACIÓN POR VELOCIDAD:
  if(jugadorUno.habilidades.velocidad > jugadorDos.habilidades.velocidad){
    contadorPuntosJug1++;
  }else if(jugadorUno.habilidades.velocidad < jugadorDos.habilidades.velocidad){
    contadorPuntosJug2++;
  }else{
    contadorPuntosJug1++;
    contadorPuntosJug2++;
  }

  //COMPARACIÓN POR NIVEL DE VIDA:
  if(jugadorUno.habilidades.vida > jugadorDos.habilidades.vida){
    contadorPuntosJug1++;
  }else if(jugadorUno.habilidades.vida < jugadorDos.habilidades.vida){
    contadorPuntosJug2++;
  }else{
    contadorPuntosJug1++;
    contadorPuntosJug2++;
  }
    
  //COMPARACIÓN POR CANTIDAD DE ARTÍCULOS
  if(jugadorUno.articulos.length > jugadorDos.articulos.length){
    contadorPuntosJug1++;
  }else if(jugadorUno.articulos.length < jugadorDos.articulos.length){
    contadorPuntosJug2++
  }else{
    contadorPuntosJug1++
    contadorPuntosJug2++
  }

    //DEFINIENDO EL GANADOR DE LA PARTIDA
  if(contadorPuntosJug1 > contadorPuntosJug2){
    ganador = "El ganador es el jugador numero 1: " + jugadorUno.nombre; 
  }else if (contadorPuntosJug1 < contadorPuntosJug2){
    ganador = "El ganador es el jugador numero 2: " + jugadorDos.nombre;
  }else{
    ganador = "El resultado entre los jugadores es un empate";
  }

  let resultado = {
    puntosJugadorUno : contadorPuntosJug1,
    puntosJugadorDos : contadorPuntosJug2,
    ganador
  }

  console.log(resultado)
