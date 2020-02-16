import React from 'react';

const defaultUser = {
  id: '',
  name: '',
  avatarUrl: '',
};

const UserContext = React.createContext({
  isAuthenticated: false,
  user: defaultUser,
});

export default UserContext;
