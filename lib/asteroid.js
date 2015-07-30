(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  };

  var Asteroid = Asteroids.Asteroid = function(pos, game) {
    var vel = Asteroids.Util.randomVec(isNaN(game.multiplier) ? 2 : game.multiplier);
    Asteroids.MovingObject.call(this, {pos: pos, vel: vel, color: Asteroid.COLOR, radius: Asteroid.RADIUS, game: game });
  };

  Asteroid.COLOR = "brown";
  Asteroid.RADIUS =  40;
  Asteroid.MULTIPLIER = 1;


  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.draw = function(ctx) {
      ctx.drawImage(imageObj, this.pos[0]-40, this.pos[1]-40);
  };

})();
