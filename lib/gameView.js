(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

    var GameView = Asteroids.GameView = function (game, ctx) {
      this.game = game;
      this.ctx = ctx;
    };

    GameView.prototype.start = function () {
      var game = this.game
      var ctx = this.ctx
      this.bindKeyHandlers()
      setInterval(this.run.bind(this), 20);
    };

    GameView.prototype.run = function () {
      var obj = this
      if (this.game.asteroids.length === 0) {
        alert ("You win!")
      } else {
        var ctx = obj.ctx;
        obj.game.step();
        obj.game.draw(ctx);
      }

    };

    GameView.prototype.bindKeyHandlers = function () {
      var game = this.game
      key('up', function(){ game.ship.power(.1)});
      key('down', function(){ game.ship.power(-.1)});
      key('left', function(){ game.ship.turn(1)});
      key('right', function(){ game.ship.turn(-1)});
      key('space', function(){ game.ship.fireBullet() });
    };

  })();
