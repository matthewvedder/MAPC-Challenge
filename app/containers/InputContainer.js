const React = require('react');

function MainContainer (props) {
  return (
    <div className='input-container'>
      <div input-container>
      <h5>{props.title}</h5>
      <hr/>
      {props.children}
      </div>
    </div>
  )
}

module.exports = MainContainer;
