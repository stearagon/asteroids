(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

var MovingObject = Asteroids.MovingObject = function(args) {
  this.pos = args.pos;
  this.vel = args.vel;
  this.radius = args.radius;
  this.color = args.color;
  this.game = args.game;
  this.direction = args.direction;
};

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
};

MovingObject.prototype.move = function () {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  this.pos = this.game.wrap(this.pos);
};

MovingObject.prototype.isCollidedWith = function(otherObject){
  var xDiff = this.pos[0] - otherObject.pos[0];
  var yDiff = this.pos[1] - otherObject.pos[1];
  var obj = this
  var distance = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
  if (distance < (this.radius + otherObject.radius)){
    return true;
  } else {
    return false;
  };
};

MovingObject.prototype.collideWith = function(otherObject){
  var game = this.game;
  if (this.game.restart > 100){
    if (otherObject === game.ship) {
    // game.ship.relocate()
        this.game.restart = 0;
        game.lives--
        game.ship.pos = game.ship.randomPosition()
        game.ship.vel = 0
        game.ship.bullets = 10;
    }
  }
};

})();
