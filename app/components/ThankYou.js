const React = require('react');
const MainContainer = require('../containers/MainContainer')

function ThankYou (props) {
  return (
    <MainContainer>
      <h2> Thank you for registering Matthew!</h2>
      <h4> Information on next steps has been sent to: matthew@example.com</h4>
    </MainContainer>
  )
}

module.exports = ThankYou;

