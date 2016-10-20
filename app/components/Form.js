const React = require('react');
const Input = require('./Input');
const Link = require('react-router').Link;
const { Form } = require('formsy-react');
const InputContainer = require('../containers/InputContainer');
const MainContainer = require('../containers/MainContainer');
const axios = require ('axios');
require('../styles.css');


const link = 'here'.link('#')
const myForm = React.createClass({
  contextTypes: {
  router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return { canSubmit: false };
  },
  submit(data) {
    return axios.post('https://shielded-citadel-11180.herokuapp.com/users', data)
    .then(function (response) {
      if ( response.data.email_exists === true ) {
        this.setState({ message: 'An account with the email ' + data.email + ' already exists! Please sign in.' });
      } else {
        this.context.router.push({
          pathname: '/thank-you',
          state: {
            first_name: data.first_name,
            email: data.email
          }
        })
      }
    }.bind(this))
  },
  enableButton() {
    this.setState({ canSubmit: true });
  },
  disableButton() {
    this.setState({ canSubmit: false });
  },
  render() {
    return (
      <MainContainer title="Start Your Free Demo">
        <Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} >
          <p>{this.state.message}</p>
          <InputContainer title="Name">
            <Input value="" name="first_name" placeholder="First Name" type="text" required />
            <Input value="" name="last_name" placeholder="Last Name" type="text" required />
          </InputContainer>
          <InputContainer title="Account">
            <Input value="" name="email" placeholder="Email" validations="isEmail" validationError="Are you sure this is a valid email?" required />
            <Input value="" name="password" placeholder="Password" type="password" validations="minLength:6" validationError="Password must be at least six characters" required />
          </InputContainer>
          <InputContainer title="Project Information">
            <Input value="" name="project_name" placeholder="Project Name" type="text" required />
            <Input value="" name="organization_name" placeholder="Organization Name" type="text" required />
          </InputContainer>
          <button className='btn btn-md btn-success button'type="submit" disabled={!this.state.canSubmit}>Start Your Demo</button>
        </Form>
      </MainContainer>
    );
  }
});

module.exports = myForm;
