import React from 'react';
import ReactDOM from 'react-dom';
import Note from './Note';
import Banner from './Banner';
import './index.css';

ReactDOM.render(
  <Note />,
  document.getElementById('root')
);

ReactDOM.render(
  <Banner />,
  document.getElementById('banner')
);
