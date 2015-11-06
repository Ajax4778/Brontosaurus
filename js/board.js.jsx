var Board = React.createClass({
  getInitialState: function() {
    return { grid: [], selected: [] };
  },

  componentDidMount: function() {
    TileStore.addChangeListener(this._onChangeEvent);
    AppDispatcher.dispatch(actionType: WordConstants.NEW_GAME);
  },

  _onChangeEvent: function() {
    this.setState({ grid: TileStore.currentTiles() })
  },

  _buildTiles: function() {
    var tiles = this.state.grid.map(function(tile) {
      <div className='tile'>{tile.value}</div>
    });
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
