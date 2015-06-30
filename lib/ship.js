(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function(game) {
    var vel = [0,0]
    var pos = this.randomPosition();
    Asteroids.MovingObject.call(this, {pos: pos, vel: vel, color: Ship.COLOR, radius: Ship.RADIUS, game: game});
  };

  Ship.COLOR = "#00F";
  Ship.RADIUS = 5;


  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.draw = function(ctx) {
    this.decrease()
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(this.pos[0]+20,this.pos[1]);
    ctx.lineTo(this.pos[0]+20,this.pos[1]+20);
    ctx.lineTo(this.pos[0]+3,this.pos[1]+20);
    ctx.closePath();
    ctx.strokeStyle = 'rgb(0,128,0)';
    ctx.lineWidth = 5;
    ctx.stroke();
      // ctx.beginPath();
      //
      // ctx.arc(
      //   this.pos[0],
      //   this.pos[1],
      //   this.radius,
      //   0,
      //   2 * Math.PI,
      //   false
      // );

      ctx.fill();
  };

  Ship.prototype.decrease = function () {
    if (this.vel[0] > 0) {
      this.vel[0] = this.vel[0] * .99
    }
    if (this.vel[0] < 0) {
      this.vel[0] = this.vel[0] * .99
    }
    if (this.vel[1] > 0) {
      this.vel[1] = this.vel[1] * .99
    }
    if (this.vel[1] < 0) {
      this.vel[1] = this.vel[1] * .99
    }
  }

  Ship.prototype.relocate = function () {
    this.pos = Asteroids.game.randomPosition();
  };

  Ship.prototype.randomPosition = function () {
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    };
    var randX = getRandomArbitrary(0, Asteroids.Game.DIM_X);
    var randY = getRandomArbitrary(0, Asteroids.Game.DIM_Y);

    var pos = [randX, randY];
    return pos;
  };

  Ship.prototype.power = function (impulse) {
    this.vel[0] = this.vel[0] + impulse[0]
    this.vel[1] = this.vel[1] + impulse[1]
  };

  Ship.prototype.fireBullet = function () {
    var newBullet = new Asteroids.Bullet(this.game);
    this.game.bullets.push(newBullet);
  };


})();
