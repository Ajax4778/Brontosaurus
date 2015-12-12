var React = require('react');
var Tile = require('./tile.jsx');

var Board = React.createClass({
  _gridSize: 26,

  getInitialState: function() {
    var blankGrid = new Array(this._gridSize).join('...').split('');
    return {
      grid: blankGrid,
      nullTiles: blankGrid.map(function(_, i) { return i; }),
      selected: []
    };
  },

  componentDidMount: function() {
    document.addEventListener('keypress', this.handleKeyPress);
    this.startGame();
  },

  componentWillUnmount: function() {
    document.removeEventListener('keypress', this.handleKeyPress);
  },

  // onChangeEvent: function() {
  //   this.setState({ grid: this._grid });
  // },

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

  startGame: function() {
    var newTiles = TileStore.startNewGame();
    var nullTiles = this.state.nullTiles;
    var grid = this.state.grid;
    newTiles.forEach(function(tile) {
      newTileIdx = parseInt(Math.random * nullTiles.length);
      grid[newTileIdx] = tile;
      nullTiles.splice(newTileIdx, 1);
    });
    this.setState({ grid: grid, nullTiles: nullTiles });
  },

  addTiles: function() {
    var newTiles = TileStore.addTiles();
    var nullTiles = this.state.nullTiles;
    var grid = this.state.grid;
    newTiles.forEach(function(tile) {
      if (nullTiles.length === 0) {
        this.setState({ grid: grid, nullTiles: nullTiles });
      } else {
        newTileIdx = parseInt(Math.random * nullTiles.length);
        grid[newTileIdx] = tile;
        nullTiles.splice(newTileIdx, 1);
      }
    });
    this.setState({ grid: grid, nullTiles: nullTiles });
  },

  handleKeyPress: function(e) {
    e.preventDefault();
    console.log(e.keyCode);
    this.addTiles();
    // var dir = e.keyInput; ////////
    // this.makeMove(dir);
  },

  render: function() {
    return (
      <ul className='board container'>
        {this.state.grid}
      </ul>
    );
  }
});

module.exports = Board;
