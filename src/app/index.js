import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { withUserProvider } from './user';

const ConnectedApp = withUserProvider(App);

ReactDOM.render(<ConnectedApp />, document.getElementById('app'));
