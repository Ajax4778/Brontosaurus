var React = require('react');

var Tile = React.createClass({
  render: function() {
    return (
      <div className='tile'>{this.props.letter}</div>
    );
  }
});

module.exports = Tile;
