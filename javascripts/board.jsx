var React = require('react');
var Tile = require('./tile.jsx');

var Board = React.createClass({
  _grid: [],

  getInitialState: function() {
    return { grid: this._grid, selected: [] };
  },

  componentDidMount: function() {
    document.addEventListener('keypress', this.handleKeyPress);
    this._grid = window.TileStore.startNewGame();
    this.onChangeEvent();
  },

  componentWillUnmount: function() {
    document.removeEventListener('keypress', this.handleKeyPress);
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
    while (tiles.length < 25) {
      id += 1;
      tiles.push(<Tile key={id} letter='0'/>);
    }
    return tiles;
  },

  handleKeyPress: function(e) {
    e.preventDefault();
    console.log(e.keyCode);
    var newTiles = TileStore.addTiles();
    this._grid = this._grid.concat(newTiles);
    this._grid.splice(25);
    this.onChangeEvent();
    // var dir = e.keyInput; ////////
    // this.makeMove(dir);
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
