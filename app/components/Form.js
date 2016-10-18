const React = require('react');
const Input = require('./Input');
const { Form } = require('formsy-react');
const InputContainer = require('../containers/InputContainer');


const myForm = React.createClass({
  getInitialState() {
    return { canSubmit: false };
  },
  submit(data) {
    alert(JSON.stringify(data, null, 4));
  },
  enableButton() {
    this.setState({ canSubmit: true });
  },
  disableButton() {
    this.setState({ canSubmit: false });
  },
  render() {
    return (
      <Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} className="login">
        <InputContainer title="Name">
          <Input value="" name="first-name" placeholder="First Name" type="text" required />
          <Input value="" name="last-name" placeholder="Last Name" type="text" required />
        </InputContainer>
        <InputContainer title="Account">
          <Input value="" name="email" placeholder="Email" validations="isEmail" validationError="Are you sure this is a valid email?" required />
          <Input value="" name="password" placeholder="Password" type="password" required />
        </InputContainer>
        <InputContainer title="Project Information">
          <Input value="" name="project" placeholder="Project Name" type="text" required />
          <Input value="" name="organization" placeholder="Organization Name" type="text" required />
        </InputContainer>
        <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
      </Form>
    );
  }
});

module.exports = myForm;
