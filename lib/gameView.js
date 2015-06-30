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
        console.log("ran the run method once");
        var ctx = this.ctx
        this.game.step();
        this.game.draw(ctx);
    };

    GameView.prototype.bindKeyHandlers = function () {
      var game = this.game
      key('up', function(){ game.ship.power([0,-1])});
      key('down', function(){ game.ship.power([0,1])});
      key('left', function(){ game.ship.power([-1,0])});
      key('right', function(){ game.ship.power([1,0])});
      key('space', function(){ game.ship.fireBullet() });
    };

  })();
