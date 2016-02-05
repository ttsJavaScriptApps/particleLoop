function Particle(startX, startY){
  this.x = startX;
  this.y = startY;
}

var particles = []

var time = 0;
var gravity = 0.5;

Particle.prototype = {
  getVelocity: function(){
    return time * gravity;
  },
  move: function(){
    this.y += this.getVelocity();
    if (this.y >= 500){
      console.log("bottom");
    }
  }
}
