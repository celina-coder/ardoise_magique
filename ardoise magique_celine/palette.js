"use strict"
var pen=  document.getElementById( "pipette" );
var rubber =  document.getElementById( "effacer");

var ColorPalette = function(pen){


	this.canvas = document.getElementById('palette');
	this.context = this.canvas.getContext('2d');
    this.pen = pen;
    
    var gradient;
    
    // Dégradé rouge -> vert -> bleu horizontal.
    gradient = this.context.createLinearGradient(0, 0, this.canvas.width, 0); //Dégradé de couleur de gauche à droite
    
    gradient.addColorStop(0,    'rgb(255,   0,   0)');
    gradient.addColorStop(0.15, 'rgb(255,   0, 255)');
    gradient.addColorStop(0.32, 'rgb(0,     0, 255)');
    gradient.addColorStop(0.49, 'rgb(0,   255, 255)');
    gradient.addColorStop(0.66, 'rgb(0,   255,   0)');
    gradient.addColorStop(0.83, 'rgb(255, 255,   0)');
    gradient.addColorStop(1,    'rgb(255,   0,   0)');
    
    this.context.fillStyle = gradient;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    
    // Dégradé blanc opaque -> transparent -> noir opaque vertical.
    gradient = this.context.createLinearGradient(0, 0, 0, this.canvas.height); //Dégradé blanc->noir du haut vers le bas
    
    gradient.addColorStop(0,   'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
    gradient.addColorStop(0.5, 'rgba(0,     0,   0, 0)');
    gradient.addColorStop(1,   'rgba(0,     0,   0, 1)');
    
    this.context.fillStyle = gradient;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    
}



//ColorPalette.prototype.onPickColor = function(event)
//{ 
  //  var palette = this.context.getImageData(event.offsetX, event.offsetY, 1, 1);
   // currentColor='rgb(' + palette.data[0] + ',' + palette.data[1] + ',' + palette.data[2] + ')';
//};


/**********************************************************************************************************************/
