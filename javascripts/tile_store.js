(function(root) {
  var TILE_HASH = {
    a: {freq: 9, points: 1},
    b: {freq: 2, points: 3},
    c: {freq: 2, points: 3},
    d: {freq: 4, points: 2},
    e: {freq: 12, points: 1},
    f: {freq: 2, points: 4},
    g: {freq: 3, points: 2},
    h: {freq: 2, points: 4},
    i: {freq: 9, points: 1},
    j: {freq: 1, points: 8},
    k: {freq: 1, points: 5},
    l: {freq: 4, points: 1},
    m: {freq: 2, points: 3},
    n: {freq: 6, points: 1},
    o: {freq: 8, points: 1},
    p: {freq: 2, points: 3},
    q: {freq: 1, points: 10},
    r: {freq: 6, points: 1},
    s: {freq: 4, points: 1},
    t: {freq: 6, points: 1},
    u: {freq: 4, points: 1},
    v: {freq: 2, points: 4},
    w: {freq: 2, points: 4},
    x: {freq: 1, points: 8},
    y: {freq: 2, points: 4},
    z: {freq: 1, points: 10}
  }

  var _allTiles = [
    "a", "a", "a", "a", "a", "a", "a", "a", "a",
    "b", "b", "c", "c", "d", "d", "d", "d",
    "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e",
    "f", "f", "g", "g", "g", "h", "h",
    "i", "i", "i", "i", "i", "i", "i", "i", "i", "j", "k",
    "l", "l", "l", "l", "m", "m", "n", "n", "n", "n", "n", "n",
    "o", "o", "o", "o", "o", "o", "o", "o", "p", "p", "qu",
    "r", "r", "r", "r", "r", "r", "s", "s", "s", "s",
    "t", "t", "t", "t", "t", "t", "u", "u", "u", "u", "v", "v",
    "w", "w", "x", "y", "y", "z"
  ]

  var _getTiles = function(n) {
    var newTiles = [];
    var rand;
    for (var i = 0; i < n; i++) {
      rand = parseInt(Math.random() * _allTiles.length)
      console.log(rand);
      newTiles.push(_allTiles.splice(rand, 1));
    }
    return newTiles;
  };

  root.TileStore = {
    startNewGame: function() {
      return _getTiles(12);
    },

    addTiles: function() {
      return _getTiles(4);
    },

    returnTiles: function(tiles) {
      _allTiles = _allTiles.concat(tiles).sort();
    }
  }
}(this));
