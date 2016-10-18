const React = require('react');

function MainContainer (props) {
  return (
    <div>
      <h5>{props.title}</h5>
      {props.children}
    </div>
  )
}

module.exports = MainContainer;
