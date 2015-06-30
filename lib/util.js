(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Util = Asteroids.Util = {
  };

  Util.inherits = function (ChildClass, ParentClass) {
    var obj = ChildClass;
    function Surrogate () {};
    Surrogate.prototype = ParentClass.prototype;

    obj.prototype = new Surrogate();
  };

  Util.randomVec = function(length) {
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    var x = getRandomArbitrary(-length, length);

    var y = Math.sqrt(Math.pow(length, 2) - Math.pow(x,2))

    if (Math.random() > .5) {
      y = -y;
    } else {
      y = y;
    };

    return [x,y]
  };

})();
