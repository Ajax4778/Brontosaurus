var Board = React.createClass({
  getInitialState: function() {
    return { grid: LetterStore.getGrid() };
  },

  componentDidMount: function() {
    LetterStore.addChangeListener(this._onChangeEvent)
  },

  _onChangeEvent: function() {
    this.setState({ grid: LetterStore.getGrid() })
  },

  _buildTiles: function() {

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
