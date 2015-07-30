(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

    var GameView = Asteroids.GameView = function (game, ctx) {
      this.game = game;
      this.ctx = ctx;
      this.timeShoot = 5;
    };

    GameView.prototype.start = function () {
      var game = this.game
      var ctx = this.ctx
      // this.bindKeyHandlers()
      setInterval(this.run.bind(this), 20);
    };

    GameView.prototype.run = function () {
      var obj = this;
      if (this.timeShoot > 0) { this.timeShoot-- }
      this.shipAction();
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

    GameView.prototype.shipAction = function(){
      if (key.isPressed('up')){
        game.ship.power(.05);
      }

      if (key.isPressed('down')){
        game.ship.power(-.05);
      }

      if (key.isPressed('left')){
        game.ship.turn(1);
      }

      if (key.isPressed('right')){
        game.ship.turn(-1);
      }


      if (key.isPressed('space')){
        if (this.timeShoot === 0){
          game.ship.fireBullet();
          this.timeShoot = 5;
        }
      }

    }

    GameView.prototype.end = function(){
      $("#reset-box").removeClass("display-none")

      this.ctx.font = "1.5vw \"Press Start 2P\"";
      this.ctx.fillStyle = "red"
      this.ctx.fillText("No More Lives. It's Over Fool!", .28 * window.innerWidth, .40 * window.innerHeight);
      this.ctx.fillText("Your Score: " + this.game.score , .28 * window.innerWidth, .50 * window.innerHeight);
      return;
    }


  })();
