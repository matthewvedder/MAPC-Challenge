const React = require('react');
const MainContainer = require('../containers/MainContainer')

function ThankYou (props) {
  return (
    <MainContainer>
      <h2 className='thank-you'>
        Thank you for registering {props.location.state.first_name}!
      </h2>
      <hr/>
      <h4 className='thank-you'>
        Information on next steps has been sent to: {props.location.state.email}
      </h4>
    </MainContainer>
  )
}

module.exports = ThankYou;

