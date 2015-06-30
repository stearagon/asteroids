(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function(game) {
    var vel = this.defaultSpeed()
    var pos = [game.ship.pos[0],game.ship.pos[1]];
    Asteroids.MovingObject.call(this, {pos: pos, vel: vel, color: Bullet.COLOR, radius: Bullet.RADIUS, game: game});
  };

  Bullet.COLOR = "#00F";
  Bullet.RADIUS = 3;


  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);


  Bullet.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  };

  Bullet.prototype.defaultSpeed = function() {
      function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      };
      var obj = this
      var posVel = []

      if (game.ship.vel[0] === 0 && game.ship.vel[1] === 0){
      var randX = getRandomArbitrary(3, 5);
      var randY = getRandomArbitrary(3, 5);

      posVel = [randX, randY];
    } else {
      posVel = [game.ship.vel[0]*3, game.ship.vel[1]*3];
    }
      return posVel;
  }

  Bullet.prototype.collideWith = function(otherObject){
    var game = this.game
    if (otherObject !== game.ship) {
      game.remove(otherObject);
    }
  };

})();
