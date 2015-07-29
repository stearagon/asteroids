(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }


  var Asteroid = Asteroids.Asteroid = function(pos, game) {
    var vel = Asteroids.Util.randomVec(2);
    Asteroids.MovingObject.call(this, {pos: pos, vel: vel, color: Asteroid.COLOR, radius: Asteroid.RADIUS, game: game });
  };

  Asteroid.COLOR = "brown";
  Asteroid.RADIUS = 27;


  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.draw = function(ctx) {
    // this.decrease()

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(this.pos[0]+30,this.pos[1]);
    ctx.lineTo(this.pos[0],this.pos[1]-30);
    ctx.lineTo(this.pos[0]-27,this.pos[1]-28);
    ctx.lineTo(this.pos[0]-24,this.pos[1]+4);
    ctx.lineTo(this.pos[0],this.pos[1]+10);
    ctx.closePath();
    ctx.strokeStyle = 'rgb(0,0,0)';
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fill();
  };

})();
