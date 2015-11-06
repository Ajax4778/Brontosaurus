(function(root) {
  var ALL_TILES = ['a','b','c'];
  // var _tiles = [empty grid]; or maybe object mapping position to letter?

  var _getTiles = function(n) {
    // return n tiles from ALL_TILES
  }

  var _startNewGame = function() {
    var startingTiles = _getTiles(12);
    // put startingTiles randomly into _tiles
  };

  var _addTiles = function() {
    var newTiles = _getTiles(4);
    // add newTiles randomly to empty spaces in _tiles
  }


  root.TileStore = function() {
    currentTiles: function() {
      return _tiles.slice();
    },

    dispatcherId: AppDispatcher.register(function(action) {
      switch (action.actionType) {
        case WordConstants.NEW_GAME:
  }
}(this));
