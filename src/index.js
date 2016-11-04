import React from 'react';
import ReactDOM from 'react-dom';
import Note from './Note';
import Banner from './Banner';
import './index.css';

ReactDOM.render(
  <Banner />,
  document.getElementById('banner')
);

ReactDOM.render(
  <Note text="Initial Text"></Note>,
  document.getElementById('root')
);
