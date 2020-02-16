import React from 'react';

const SignUp = ({ setUser }) => {
  const [name, setName] = React.useState('');
  const [avatarUrl, setAvatarUrl] = React.useState('');

  return (
    <form
      onSubmit={() =>
        setUser({
          name,
          avatarUrl,
        })
      }
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        onChange={e => setName(e.currentTarget.value)}
      />

      <label htmlFor="avatarUrl">Avatar URL</label>

      <input
        type="text"
        name="avatarUrl"
        onChange={e => setAvatarUrl(e.currentTarget.value)}
      />

      <input type="submit" value="Sign up!" />
    </form>
  );
};

export default SignUp;
