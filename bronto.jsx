var Game = React.createClass({
  render: function() {
    return (
      <div>
      </div>
    );
  }
});


window.mountApp = function() {
  React.render(<Game/>,
    document.getElementById('bronto-container')
  );
};
