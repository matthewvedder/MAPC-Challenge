const React = require('react');
const Input = require('./Input');
const { Form } = require('formsy-react');
const InputContainer = require('../containers/InputContainer');
const MainContainer = require('../containers/MainContainer');
var axios = require ('axios');
require('../styles.css');

function handleSubmit (data) {
  axios.post('http://localhost:3000/users', data) //'https://shielded-citadel-11180.herokuapp.com/users'
    .then(function (response) {
      alert(response.data.email_exists);
    })
    .catch(function (error) {
      console.log(error);
    });
}

const myForm = React.createClass({
  getInitialState() {
    return { canSubmit: false };
  },
  submit(data) {
    handleSubmit(data);
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
          <InputContainer title="Name">
            <Input value="" name="first_name" placeholder="First Name" type="text" required />
            <Input value="" name="last_name" placeholder="Last Name" type="text" required />
          </InputContainer>
          <InputContainer title="Account">
            <Input value="" name="email" placeholder="Email" validations="isEmail" validationError="Are you sure this is a valid email?" required />
            <Input value="" name="password" placeholder="Password" type="password" required />
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
