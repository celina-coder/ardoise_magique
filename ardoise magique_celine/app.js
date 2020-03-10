"use strict";
var pipette =document.getElementById("pipette")
var ardoise = document.getElementById("ardoise");
var ctx = ardoise.getContext("2d")
var isDown =false;
var lastX, lastY;
var color = "black"
var epaisseur=1
var palette =document.getElementById("palette")
var currentColor
/****************************FONCTIONS********************************** */

function draw(e)
{
    if(isDown)
    {
        ctx.beginPath();      // Début du chemin
        ctx.lineJoin = "round"; // afficher un tracé correct
        ctx.lineCap = "round";// idem
        ctx.moveTo(e.offsetX,e.offsetY);    // Le tracé part du point 50,50
        ctx.strokeStyle= color;
        ctx.lineWidth = epaisseur;
        ctx.lineTo(lastX,lastY);  // Un segment est ajouté vers 200,200
        ctx.stroke();
       
    }
    lastX = e.offsetX;
    lastY= e.offsetY
}



/********************************EXECUTION********************************* */
function pipette2(e) {
   
    var palette =document.getElementById("palette")
    var ctx2 = palette.getContext("2d")
    var image_data = ctx2.getImageData(e.offsetX, e.offsetY, 1, 1);
    console.log(image_data)
    color = 'rgba(' + image_data.data[0] + ', ' + image_data.data[1] +
               ', ' + image_data.data[2] + ', ' + (image_data.data[3] / 255) + ')';
    
  }
  palette.addEventListener('click', pipette2)


ardoise.addEventListener("mousedown", function(){ // APPUIE
    isDown = true
    
})

ardoise.addEventListener("mousemove", function(event){ // BOUGE
    
    draw(event)
})
ardoise.addEventListener("mouseup", function(){ // LEVE
    isDown = false;
})
ardoise.addEventListener("mouseleave", function(){ // QUITTE
    isDown = false
})

var Palette = new ColorPalette(); // activation de la fonction degrade de la palette

$('.color').click(function(){ // récupération des couleurs
    color = $(this).data("couleur")
    console.log(color)
})

pipette.addEventListener("click",function(){
     palette.classList.toggle('hide')
      

})


//recupération de l'épaisseur

$('.epaisseur').click(function(){ 
    epaisseur = $(this).data("epaisseur")
}) 
    


$('#effacer').click(function(){
   
  // color='white'; // stylos effacer
   //epaisseur = 5

    ctx.clearRect(0, 0, ardoise.width, ardoise.height); // tout effacer
      });





