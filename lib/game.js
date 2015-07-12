(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function () {
    this.asteroids = [];
    this.addAsteroids(this.asteroids);
    this.ship = new Asteroids.Ship(this);
    this.bullets = [];
  };

  Game.DIM_X = 600;
  Game.DIM_Y = 600;
  Game.NUM_ASTEROIDS = 10; // put number back to 10

  Game.prototype.addAsteroids = function (asteroids) {
    var num = Game.NUM_ASTEROIDS;
    while (num > 0) {
      var pos = this.randomPosition();
      this.asteroids.push(new Asteroids.Asteroid(pos, this));
      num--;
    };
  };

  Game.prototype.randomPosition = function () {
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    };
    var randX = getRandomArbitrary(0, Game.DIM_X);
    var randY = getRandomArbitrary(0, Game.DIM_Y);

    var pos = [randX, randY];
    return pos;
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0,0,Game.DIM_X, Game.DIM_Y);
    var array = this.allObjects()
    array.forEach(function (asteroid){
      asteroid.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function(){
    var array = this.allObjects()
    array.forEach(function (asteroid){
      asteroid.move();
    });
  };

  Game.prototype.wrap = function(pos) {
    var xPos = pos[0];
    var yPos = pos[1];

    function _wrap(coord) {
      if (coord <= 0) {
        return Game.DIM_X;
      } else if (coord >= Game.DIM_X) {
        return 0;
      } else {
        return coord;
      };
    };

    xPos = _wrap(xPos);
    yPos = _wrap(yPos);

    return [xPos, yPos];

    };

  Game.prototype.checkCollisions = function() {
    var game = this;
    var array = this.allObjects()
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array.length; j++) {
        if (i !== j && (array[i].isCollidedWith(array[j]))) {
          // alert("COLLISION");
          array[i].collideWith(array[j]);
        };
      };
    };
  };

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function (asteroid) {
    for (var i = 0; i < this.asteroids.length; i++) {
      if (asteroid === this.asteroids[i]) {
        this.asteroids.splice(i,1);
      };
    };
  };

  Game.prototype.allObjects = function(){
    var all = [];
    all = all.concat(this.asteroids);
    all.push(this.ship);
    all = all.concat(this.bullets);
    return all;
  };

})();
