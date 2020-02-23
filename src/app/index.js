import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { withUserProvider } from './user';

const ConnectedApp = withUserProvider(App);

render(<ConnectedApp />, document.getElementById('app'));
