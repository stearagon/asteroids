(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  };

  var Asteroid = Asteroids.Asteroid = function(pos, game) {
    var vel = Asteroids.Util.randomVec(2);
    Asteroids.MovingObject.call(this, {pos: pos, vel: vel, color: Asteroid.COLOR, radius: Asteroid.RADIUS, game: game });
  };

  Asteroid.COLOR = "brown";
  Asteroid.RADIUS =  40;


  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.draw = function(ctx) {
    // var imageObj = new Image();
    // imageObj.onload = function(){
      ctx.drawImage(imageObj, this.pos[0]-40, this.pos[1]-40);
    // }.bind(this)
    //
    // imageObj.src = "assets/asteroid_blue.png";
    // this.decrease()
    // ctx.fillStyle = this.color;
    // ctx.beginPath();
    // ctx.moveTo(this.pos[0]+18,this.pos[1]-3);
    // ctx.lineTo(this.pos[0],this.pos[1]-23);
    // ctx.lineTo(this.pos[0]-20,this.pos[1]-21);
    // ctx.lineTo(this.pos[0]-21,this.pos[1]+1);
    // ctx.lineTo(this.pos[0]-15,this.pos[1]+17);
    // ctx.lineTo(this.pos[0],this.pos[1]+17);
    // ctx.closePath();
    // ctx.strokeStyle = 'rgb(0,0,0)';
    // ctx.lineWidth = 5;
    // ctx.stroke();
    // ctx.fill();
  };

})();
