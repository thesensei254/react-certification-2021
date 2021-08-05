import React from 'react';
import ReactDOM from 'react-dom';
import { usePromiseTracker } from 'react-promise-tracker';

import App from './components/App';
import './global.css';

const LoadingIndicator = () => {
  const { promiseInProgress } = usePromiseTracker();
  return promiseInProgress && <h2>Loading . . .</h2>;
};

ReactDOM.render(
  <div>
    <App />
    <LoadingIndicator />
  </div>,
  document.getElementById('root')
);
