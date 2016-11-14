import React, {Component} from 'react';
import Note from './Note'
import './App.css';

class Column extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
      ],
      nextId: 0
    }
  }
  add(title, text) {
    var id = this.nextId();
    var notes = [
      ...this.state.notes,
      {
        id: id,
        text: text,
        title: title
      }
    ]
    this.setState({notes})
  }
  nextId() {
    return this.state.nextId++
  }
  eachNote(note) {
    return(
      <Note key={note.id} title={note.title} text={note.text}>
      </Note>
    )
  }
  render() {
    return (
      <div className="column">
        {this.state.notes.map(this.eachNote)}
        <button onClick={() => this.add('New Note', 'Text in Note')}>+</button>
      </div>
    )
  }
};

export default Column;
