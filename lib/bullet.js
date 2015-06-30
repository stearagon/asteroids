(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function(game) {
    var vel = [game.ship.vel[0]*5,game.ship.vel[1]*5];
    var pos = [game.ship.pos[0],game.ship.pos[1]];
    Asteroids.MovingObject.call(this, {pos: pos, vel: vel, color: Bullet.COLOR, radius: Bullet.RADIUS, game: game});
  };

  Bullet.COLOR = "#00F";
  Bullet.RADIUS = 1;


  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);


  Bullet.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  };

  Bullet.prototype.collideWith = function(otherObject){
    var game = this.game
    if (otherObject !== game.ship) {
      game.remove(otherObject);
    }
  };

})();
