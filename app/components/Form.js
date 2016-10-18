const React = require('react');
const Input = require('./Input');
const { Form } = require('formsy-react');


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
        <Input value="" name="first-name" title="First Name" type="text" required />
        <Input value="" name="last-name" title="last Name" type="text" required />
        <Input value="" name="email" title="Email" validations="isEmail" validationError="Are you sure this is a valid email?" required />
        <Input value="" name="password" title="Password" type="password" required />
        <Input value="" name="project" title="Project Name" type="text" required />
        <Input value="" name="organization" title="Organization Name" type="text" required />
        <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
      </Form>
    );
  }
});

module.exports = myForm;
