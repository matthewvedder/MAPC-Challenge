const React = require('react');
const MainContainer = require('../containers/MainContainer')

function ThankYou (props) {
  return (
    <MainContainer className='thank-you'>
      <h2> Thank you for registering {props.location.state.first_name}!</h2>
      <hr/>
      <h4> Information on next steps has been sent to: {props.location.state.email}</h4>
    </MainContainer>
  )
}

module.exports = ThankYou;

