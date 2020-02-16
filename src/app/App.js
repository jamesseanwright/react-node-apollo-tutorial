import React from 'react';
import UserContext from './UserContext';

const App = () => {
  const { isAuthenticated } = React.useContext(UserContext);

  return isAuthenticated
    ? <Messages />
    : <SignUp />
};

export default App;
