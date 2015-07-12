(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function(game) {
    var vel = 0;
    var pos = this.randomPosition();
    var direction = 0;
    Asteroids.MovingObject.call(this, {pos: pos, vel: vel, color: Ship.COLOR,
                                        radius: Ship.RADIUS, game: game, direction: direction});
  };

  Ship.COLOR = "#00F";
  Ship.RADIUS = 5;


  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.draw = function(ctx) {
    // this.decrease()
    var front = this.front();
    var leftRear = this.rearLeft();
    var rightRear = this.rearRight();

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(front[0],front[1]);
    ctx.lineTo(leftRear[0],leftRear[1]);
    ctx.lineTo(this.pos[0],this.pos[1]);
    ctx.lineTo(rightRear[0],rightRear[1]);
    ctx.closePath();
    ctx.strokeStyle = 'rgb(0,128,0)';
    ctx.lineWidth = 5;
    ctx.stroke();
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
    this.vel += impulse
  };

  Ship.prototype.turn = function (impulse) {
    this.direction += impulse
  };

  Ship.prototype.fireBullet = function () {
    var newBullet = new Asteroids.Bullet(this.game);
    this.game.bullets.push(newBullet);
  };

  Ship.prototype.front = function(){
    var x = this.pos[0] + Ship.RADIUS * Math.sin(2 * Math.PI * (this.direction % 36)/36 );
    var y = this.pos[1] + Ship.RADIUS * Math.cos(2 * Math.PI * (this.direction % 36)/36 );
    return [x,y];
  }

  Ship.prototype.rearLeft = function(){
    var x = this.pos[0] + Ship.RADIUS * Math.sin(2 * Math.PI * ((this.direction-12) % 36)/36 );
    var y = this.pos[1] + Ship.RADIUS * Math.cos(2 * Math.PI * ((this.direction-12) % 36)/36 );
    return [x,y];
  }

  Ship.prototype.rearRight = function(){
    var x = this.pos[0] + Ship.RADIUS * Math.sin(2 * Math.PI * ((this.direction+12) % 36)/36 );
    var y = this.pos[1] + Ship.RADIUS * Math.cos(2 * Math.PI * ((this.direction+12) % 36)/36 );
    return [x,y];
  }

  Ship.prototype.move = function () {
    this.pos[0] += this.vel * (this.front()[0] - this.pos[0]);
    this.pos[1] += this.vel * (this.front()[1] - this.pos[1]);
    this.pos = this.game.wrap(this.pos);
  };


})();
