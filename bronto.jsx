var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('./javascripts/board.jsx');

var Game = React.createClass({
  render: function() {
    return (
      <div>
        <Board/>
      </div>
    );
  }
});

ReactDOM.render(<div><Game/></div>,
    document.getElementById('bronto-container')
);
