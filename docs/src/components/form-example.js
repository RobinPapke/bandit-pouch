import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import {
  CheckboxField,
  PasswordField,
  SelectField,
  TextAreaField,
  TextField,
} from 'bandit-pouch';

const ExampleForm = ({ handleSubmit, ...props }) => (
  <form onSubmit={handleSubmit}>
    <Field
      component={TextField}
      name="text"
      label="Text field label"
      placeholder="Enter some text"
    />
    <Field
      component={PasswordField}
      name="password"
      label="Password field label"
      placeholder="Enter your password"
    />
    <Field
      component={SelectField}
      name="select"
      label="Select field label"
      placeholder="Select a value"
      options={[{
        value: 'foo', label: 'Foo',
      }, {
        value: 'bar', label: 'Bar',
      }]}
    />
    <Field
      component={CheckboxField}
      name="checkbox"
      label="Tick me"
    />
    <Field
      component={TextAreaField}
      name="textarea"
      label="Text area field label"
      placeholder="Write me a story"
    />
  </form>
);

ExampleForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'example',
})(ExampleForm);
