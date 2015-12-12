var React = require('react');
var Tile = require('./tile.jsx');

var Board = React.createClass({
  GRID_SIZE: 25,
  STARTING_TILES: 12,
  ADD_TILES: 4,

  getInitialState: function() {
    var blankVals = new Array(this.GRID_SIZE + 1).join('.').split('');
    return {
      grid: blankVals,
      nullTiles: blankVals.map(function(_, i) { return i; }),
      selected: []
    };
  },

  componentDidMount: function() {
    document.addEventListener('keypress', this.handleKeyPress);
    var startingTiles = TileStore.getTiles(this.STARTING_TILES);
    this.insertNewTiles(startingTiles);
  },

  componentWillUnmount: function() {
    document.removeEventListener('keypress', this.handleKeyPress);
  },

  // makeMove: function(dir) {
  //   var newGrid;
  //   switch (dir) {
  //     case 'left':
  //       // move board left
  //       // set newGrid
  //       break;
  //     case 'right':
  //       // move board right
  //       // set newGrid
  //       break;
  //     case 'up':
  //       //move board up
  //       // set newGrid
  //       break;
  //     case 'down':
  //       //move board down
  //       // set newGrid
  //       break;
  //   }
  //   this._grid = newGrid;
  //   this.onChangeEvent();
  // },

  insertNewTiles: function(tileVals) {
    var nullTiles = this.state.nullTiles;
    var grid = this.state.grid;
    tileVals.forEach(function(val) {
      if (nullTiles.length !== 0) {
        newTileIdx = parseInt(Math.random() * nullTiles.length);
        grid[nullTiles[newTileIdx]] = val;
        nullTiles.splice(newTileIdx, 1);
      }
    });
    this.onChangeEvent(grid, nullTiles);
  },

  buildTiles: function() {
    tiles = this.state.grid.map(function(val, idx) {
      return (<Tile key={idx} letter={val}/>);
    });
    return tiles;
  },

  onChangeEvent: function() {
    var grid = arguments['0'];
    var nullTiles = arguments['1'];
    var selected = arguments['2'];
    this.setState({
      grid: grid,
      nullTiles: nullTiles,
      selected: selected
    });
  },

  handleKeyPress: function(e) {
    e.preventDefault();
    if (this.state.nullTiles.length !== 0) {
      var newTileVals = TileStore.getTiles(this.ADD_TILES);
      this.insertNewTiles(newTileVals);
      // var dir = e.keyInput; ////////
      // this.makeMove(dir);
    }
  },

  render: function() {
    var tiles = this.buildTiles();
    return (
      <ul className='board container'>
        {tiles}
      </ul>
    );
  }
});

module.exports = Board;
