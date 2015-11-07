var Board = React.createClass({
  EMPTY_BOARD: [],
  
  getInitialState: function() {
    return { grid: EMPTY_BOARD, selected: [] };
  },

  _onChangeEvent: function() {
    //this.setState({ selected: selectionChange })
  },

  _buildTiles: function() {
    var tiles = this.state.grid.map(function(tile) {
      <div className='tile'>{tile.value}</div>
    });
    return tiles;
  },

  render: function() {
    var tiles = this._buildTiles()
    return (
      <ul className='gameBoard'>
        {tiles}
      </ul>
    )
  }
})
