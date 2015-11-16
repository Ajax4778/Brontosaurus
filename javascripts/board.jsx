var React = require('react');
var Tile = require('./tile.jsx');

var Board = React.createClass({
  _grid: [],

  getInitialState: function() {
    return { grid: this._grid, selected: [] };
  },

  componentDidMount: function() {
    this._grid = window.TileStore.startNewGame();
    this.onChangeEvent();
  },

  onChangeEvent: function() {
    this.setState({ grid: this._grid });
  },

  makeMove: function(dir) {
    var newGrid;
    switch (dir) {
      case 'left':
        // move board left
        // set newGrid
        break;
      case 'right':
        // move board right
        // set newGrid
        break;
      case 'up':
        //move board up
        // set newGrid
        break;
      case 'down':
        //move board down
        // set newGrid
        break;
    }
    this._grid = newGrid;
    this.onChangeEvent();
  },

  buildTiles: function() {
    var id = 0;
    var tiles = this.state.grid.map(function(letter) {
      id += 1;
      return <Tile key={id} letter={letter}/>;
    });
    return tiles;
  },

  handleClick: function(e) {
    e.preventDefault();
    var newTiles = TileStore.addTiles()
    this._grid = this._grid.concat(newTiles);
    this.onChangeEvent();
    // var dir = e.keyInput; ////////
    // this.makeMove(dir);
  },

  render: function() {
    var tiles = this.buildTiles();
    return (
      <ul onClick={this.handleClick} className='board container'>
        {tiles}
      </ul>
    );
  }
})

module.exports = Board;
