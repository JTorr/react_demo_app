import React, {Component} from 'react';
import Note from './Note'
import './App.css';

class Column extends Component {
  render() {
    return (
      <div className="column">
        <Note text="Initial Text" title="Title Text"></Note>
        <Note text="Second Note" title="Note Title"> </Note>
      </div>
    )
  }
};

export default Column;
