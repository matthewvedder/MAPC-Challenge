const React = require('react');

function MainContainer (props) {
  return (
    <div className='form-group'>
      <div input-container>
      <h5>{props.title}</h5>
      {props.children}
      </div>
    </div>
  )
}

module.exports = MainContainer;
