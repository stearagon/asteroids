(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }


  var Asteroid = Asteroids.Asteroid = function(pos, game) {
    var vel = Asteroids.Util.randomVec(2);
    Asteroids.MovingObject.call(this, {pos: pos, vel: vel, color: Asteroid.COLOR, radius: Asteroid.RADIUS, game: game });
  };

  Asteroid.COLOR = "#FFFFFF";
  Asteroid.RADIUS = 15;


  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

})();
