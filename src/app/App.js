import React from 'react';
import UserContext, { withUserProvider } from './user';
import Messages from './Messages';
import SignUp from './SignUp';

const App = () => {
  const { isAuthenticated } = React.useContext(UserContext);

  return isAuthenticated ? <Messages /> : <SignUp />;
};

export default withUserProvider(App);
