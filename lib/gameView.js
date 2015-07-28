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
        this.ctx.font = "90px serif";
        this.ctx.fillStyle = "orange"
        this.ctx.fillText("You Won!!!", 275, 300);
      } else {
        var ctx = obj.ctx;
        obj.game.step();
        obj.game.draw(ctx);
      }

    };

    GameView.prototype.end = function(){
      this.ctx.font = "90px serif";
      this.ctx.fillStyle = "orange"
      this.ctx.fillText("No More Lives. You Lose!", 275, 300);
      return;
    }

    GameView.prototype.bindKeyHandlers = function () {
      var game = this.game
      key('up', function(){
        event.preventDefault();
        game.ship.power(.1)});
      key('down', function(){
        event.preventDefault();
        game.ship.power(-.1)});
      key('left', function(){
        event.preventDefault();
        game.ship.turn(2)});
      key('right', function(){
        event.preventDefault();
        game.ship.turn(-2)});
      key('space', function(){
        event.preventDefault();
        game.ship.fireBullet() });
    };

  })();
