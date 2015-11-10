var Game = React.createClass({
  render: function() {
    return (
      <div>
        <Board/>
      </div>
    );
  }
});


window.mountApp = function() {
  React.render(<Game/>,
    document.getElementById('bronto-container')
  );
};
