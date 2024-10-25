const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
/**
 * fillRect(x, y, width, height)
 * strokeRect(x, y, width, height)
 * arc(x, y,  radio, ini, fin, sentidohorario)
 */

// ctx.strokeRect(0, 0, 200, 200);
// ctx.fillRect(20, 20, 160, 160);
 
// ctx.fillStyle = 'orange';
// ctx.beginPath();
// ctx.arc(100, 100, 60, 0, Math.PI *2, true);
// ctx.fill();

// ctx.fillStyle = 'red';
// ctx.beginPath();
// ctx.moveTo(80, 90);
// ctx.lineTo(130, 90);
// ctx.lineTo(105, 130);
// ctx.fill();


// ctx.fillStyle = 'black';
// ctx.beginPath();
// ctx.arc( 300, 200, 50, 0, Math.PI * 2, true);
// ctx.fill();

// ctx.fillStyle = 'yellow';
// ctx.fillRect(270, 180, 20, 5);
// ctx.fillRect(310, 180, 20, 5);


// ctx.beginPath();
// ctx.arc( 280, 190, 5, 0, Math.PI * 2, true);
// ctx.fill();

// ctx.beginPath();
// ctx.arc( 320, 190, 5, 0, Math.PI * 2, true);
// ctx.fill();

// ctx.beginPath();
// ctx.arc( 300, 200, 30, 0, Math.PI, false);
// ctx.fill();

// ctx.beginPath();//Redondo el cuadrado
// ctx.roundRect(100, 100, 50, 20 ,5)
// ctx.fill();

// ctx.beginPath();//como hoja 
// ctx.roundRect(280, 135, 50, 20 ,[0,20,0,20]);
// ctx.fill();
// ctx.stroke();


// Dibujar la cabeza
ctx.arc(150, 100, 50, Math.PI, 0, false); // Cabeza del fantasma

// Dibujar el cuerpo con curvas y líneas
ctx.lineTo(200, 180); // Cuerpo izquierdo
ctx.quadraticCurveTo(175, 210, 150, 180); // Primera curva inferior
ctx.quadraticCurveTo(125, 210, 100, 180); // Segunda curva inferior
ctx.lineTo(100, 150); // Cuerpo derecho

// Dibujar los brazos (alas de fantasma)
ctx.moveTo(100, 150); 
ctx.quadraticCurveTo(70, 120, 100, 100); // Brazo izquierdo
ctx.moveTo(200, 150);
ctx.quadraticCurveTo(230, 120, 200, 100); // Brazo derecho

// Terminar el dibujo
ctx.closePath();
ctx.fillStyle = "white"; // Rellenar 
ctx.fill();
ctx.strokeStyle = "black"; // Contorno 
ctx.stroke();

// Dibujar los ojos del fantasma
ctx.beginPath();
ctx.arc(135, 90, 10, 0, Math.PI * 2, true); // Ojo izquierdo
ctx.arc(165, 90, 10, 0, Math.PI * 2, true); // Ojo derecho
ctx.fillStyle = "black";
ctx.fill();

// Dibujar la boca del fantasma
ctx.beginPath();
ctx.moveTo(140, 110); 
ctx.lineTo(160, 110); 
ctx.lineTo(150, 120);
ctx.closePath();
ctx.fill();

ctx.fillStyle = 'orange';// cuerpo de la calabaza
ctx.beginPath();
ctx.arc(350, 100, 60, 0, Math.PI *2, true);
ctx.fill();

ctx.beginPath();
ctx.arc(320, 90, 10, 0, Math.PI * 2, true); // Ojo izquierdo
ctx.arc(370, 90, 10, 0, Math.PI * 2, true); // Ojo derecho
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();//como hoja  de la calabza
ctx.roundRect(320, 20, 20, 20 ,[0,20,0,20]);
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'red';//nariz de la calabaza 
ctx.beginPath();
ctx.moveTo(380, 110);
ctx.lineTo(320, 110);
ctx.lineTo(350, 130);
ctx.fill();




// Configuración general
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;

// Dibujar cuerpo de la araña
ctx.beginPath();
ctx.arc(300, 280, 50, 0, Math.PI * 2, true); // Cuerpo redondeado
ctx.fill();

// Dibujar los ojos (relativos al cuerpo)
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(280, 260, 15, 0, Math.PI * 2, true); // Ojo izquierdo
ctx.arc(320, 260, 15, 0, Math.PI * 2, true); // Ojo derecho
ctx.fill();

// Pupilas (relativas a los ojos)
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(280, 260, 7, 0, Math.PI * 2, true); // Pupila izquierda
ctx.arc(320, 260, 7, 0, Math.PI * 2, true); // Pupila derecha
ctx.fill();

// Dibujar sonrisa (relativa al cuerpo)
ctx.beginPath();
ctx.arc(300, 290, 20, 0, Math.PI, false); // Sonrisa
ctx.stroke();

//Boca de la araña 
ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(300, 295, 7, 0, Math.PI * 2, true); // Pupila izquierda
ctx.fill();

// Dibujar el sombrero de fantasma
ctx.fillStyle = 'purple';
ctx.beginPath();
ctx.moveTo(110, 60);
ctx.lineTo(190, 60);
ctx.lineTo(150, 0);
ctx.fill(); // Triángulo para la parte delantera

ctx.fillStyle = 'purple';
ctx.fillRect(110, 50, 80, 10); // Ala del sombrero

// Dibujar la hebilla del sombrero
ctx.fillStyle = 'yellow';
ctx.fillRect(142, 50, 20, 10); // Rectángulo para la hebilla


//Patas de la araña izquierda 
ctx.strokeStyle = 'black';
ctx.lineWidth = 4;
ctx.beginPath();
ctx.moveTo(340, 290);
ctx.lineTo(370, 260);
ctx.stroke()
ctx.beginPath();
ctx.moveTo(370, 260);
ctx.lineTo(410, 290);
ctx.stroke()
ctx.beginPath();
ctx.moveTo(190, 290);
ctx.lineTo(220, 260);
ctx.stroke()
ctx.beginPath();
ctx.moveTo(220, 260);
ctx.lineTo(260, 290);
ctx.stroke()
//Patas de la araña derecha 
ctx.strokeStyle = 'black';
ctx.lineWidth = 4;
ctx.beginPath();
ctx.moveTo(340, 260);
ctx.lineTo(370, 230);
ctx.stroke()
ctx.beginPath();
ctx.moveTo(370, 230);
ctx.lineTo(410, 260);
ctx.stroke()
ctx.beginPath();
ctx.moveTo(190, 260);
ctx.lineTo(220, 230);
ctx.stroke()
ctx.beginPath();
ctx.moveTo(220, 230);
ctx.lineTo(260, 260);
ctx.stroke();


ctx.fillStyle = 'white';
ctx.beginPath();
ctx.moveTo(300, 240);
ctx.lineTo(215, 120);
ctx.stroke();



















