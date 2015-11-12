var Board = React.createClass({
  _grid: [],

  getInitialState: function() {
    return { grid: _grid, selected: [] };
  },

  componentDidMount: function() {
    _grid = TileStore.startNewGame();
    this.onChangeEvent();
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
    var id = 0;
    var tiles = this.state.grid.map(function(tile) {
      id += 1;
      return <div className='tile' key={id}>{tile}</div>;
    });
    return tiles;
  },

  handleKeyDown: function(e) {
    e.preventDefault();
    // var dir = e.keyInput; ////////
    // this.makeMove(dir);
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
