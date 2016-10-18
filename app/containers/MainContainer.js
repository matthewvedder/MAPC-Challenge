var React = require('react');
//var styles = require('../styles');

function MainContainer (props) {
  return (
    <div className="jumbotron col-sm-12 main-container">
      <h3>{props.title}</h3>
      {props.children}
    </div>
  )
}

module.exports = MainContainer;
