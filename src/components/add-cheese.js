import React from 'react';
// import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';
import { addCheese } from '../actions/cheese';

export class AddCheese extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(addCheese(values.cheese));
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(values => {
          this.onSubmit(values);
        })}
      >
        <label htmlFor="cheese">Add a cheese</label>
        <Field component="input" type="text" name="cheese" />
        <button type="submit">Add your Cheese</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'cheese'
})(AddCheese);
