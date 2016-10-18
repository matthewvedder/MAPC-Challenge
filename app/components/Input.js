const React = require('react');
const { Form } = require('formsy-react');


const Input = React.createClass({
  mixins: [Formsy.Mixin],
  changeValue(event) {
    this.setValue(event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value']);
  },
  render() {
    const className = 'form-group' + (this.props.className || ' ') + (this.showRequired() ? 'required' : this.showError() ? 'error' : null);
    const errorMessage = this.getErrorMessage();
    return (
      <div className={className + 'form-control'}>
        <label htmlFor={this.props.name}>{this.props.title}</label>
        <input
          type={this.props.type || 'text'}
          name={this.props.name}
          onChange={this.changeValue}
          value={this.getValue()}
          placeholder={this.props.placeholder}
        />
        <span className='validation-error'>{errorMessage}</span>
      </div>
    );
  }
});

module.exports = Input;
