import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { StyledForm, StyledLabel, StyledButton } from './contactForm.styled';

const phoneRegExp =
  /^\+?\d{1,4}?[ .-]?(\(\d{1,3}\))?([ .-]?\d{1,4}){1,4}([ .-]?\d{1,9})?$/;
const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string().matches(phoneRegExp).required('Required'),
});

export function ContactForm({ addContact }) {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          addContact(values);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <StyledLabel>Name</StyledLabel>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
          <StyledLabel>Number</StyledLabel>
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="div" />
          <StyledButton type="">Add contact</StyledButton>
        </StyledForm>
      </Formik>
    </>
  );
}
