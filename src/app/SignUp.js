import React from 'react';

const SIGN_UP_FORM_ELEMENTS = [
  'name',
  'avatarUrl',
];

const getValuesFromForm = (form, names) =>
  Object.fromEntries(
    [...form.elements]
      .filter(el => names.includes(el.name))
      .map(el => [
        el.name,
        el.value,
      ]),
  );

const SignUp = ({ setUser }) => {
  const onSubmit = React.useCallback(
    e => {
      e.preventDefault();

      setUser(getValuesFromForm(
        SIGN_UP_FORM_ELEMENTS,
        target,
      ));
    },
  );

  <form onSubmit={onSubmit}>
    <label htmlFor="name">Name</label>
    <input type="text" name="name" />

    <label htmlFor="avatarUrl">Avatar URL</label>
    <input type="text" name="avatarUrl" />

    <input type="submit" value="Sign up!" />
  </form>
};

export default SignUp;
