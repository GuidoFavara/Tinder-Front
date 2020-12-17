import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Container } from './layout/Container';
import App from './App';
import { render } from 'react-dom';

/*ReactDOM.render(
  <Container />,
  document.getElementById('root')
);*/
render(<App />, document.getElementById('root'));
