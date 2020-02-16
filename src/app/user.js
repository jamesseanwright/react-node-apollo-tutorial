import React from 'react';

const defaultUser = {
  id: '',
  name: '',
  avatarUrl: '',
};

const defaultUserState = {
  isAuthenticated: false,
  user: defaultUser,
};

const UserContext = React.createContext(defaultUserState);

export const withUserProvider = Component =>
  props => {
    const [userState, setUserState] = React.useState(defaultUserState);

    const setUser = user => setUserState({
      isAuthenticated: true,
      user,
    });

    return (
      <UserContext.Provider value={userState}>
        <Component {...props} setUser={setUser} />
      </UserContext.Provider>
    );
  };

export default UserContext;
