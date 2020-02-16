import React from 'react';
import UserContext, { withUserProvider } from './user';

const App = () => {
  const { isAuthenticated } = React.useContext(UserContext);

  return isAuthenticated ? <Messages /> : <SignUp />;
};

export default withUserProvider(App);
