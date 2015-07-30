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
      var obj = this;
      if (this.game.asteroids.length === 0) {
        this.game.addAsteroids(this.game.asteroids);
        this.game.restart = 0;

        this.game.ship.bullets = 15;
      } else if (this.game.lives === -1){
        this.end();
      } else {
        var ctx = obj.ctx;
        obj.game.step();
        obj.game.draw(ctx);
      }

    };

    GameView.prototype.end = function(){
      this.ctx.font = "26px \"Press Start 2P\"";
      this.ctx.fillStyle = "green"
      this.ctx.fillText("No More Lives. It's Over Fool!", 40, 300);
      this.ctx.fillText("Your Score: " + this.game.score , 200, 250);
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
