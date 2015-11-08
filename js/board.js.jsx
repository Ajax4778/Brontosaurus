var Board = React.createClass({
  EMPTY_BOARD: [],

  _grid: EMPTY_BOARD,

  getInitialState: function() {
    return { grid: _grid, selected: [] };
  },

  onChangeEvent: function() {
    this.setState({ grid: _grid });
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
    _grid = newGrid;
    this.onChangeEvent();
  },

  buildTiles: function() {
    var tiles = this.state.grid.map(function(tile) {
      <div className='tile'>{tile.value}</div>
    });
    return tiles;
  },

  handleKeyDown: function(e) {
    e.preventDefault();
    var dir = e.keyInput; ////////
    this.makeMove(dir);
  },

  render: function() {
    var tiles = this.buildTiles();
    return (
      <ul onKeyDown={this.handleKeyDown} className='gameBoard'>
        {tiles}
      </ul>
    );
  }
})
