import React, {Component} from 'react';
import './App.css';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      titleText: this.props.title,
      text: this.props.text
    }
    this.edit = this.edit.bind(this);
  }
  edit() {
    this.setState({editing: true})
  }
  save() {
    this.setState({editing: false,
                  text: this.refs.newText.value,
                  titleText: this.refs.title.value
    })
  }
  renderForm() {
    return (
      <div className="note">
        <textarea ref="title"></textarea>
        <textarea ref="newText"></textarea>
        <button onClick={() => this.save()}>Save</button>
      </div>
    )
  }
  renderNote() {
    return (
      <div className="note">
        <h1>{this.state.titleText}</h1>
          <span>
        <p>{this.state.text}</p>
            <button onClick={() => this.edit()}>EDIT</button>
          </span>
      </div>
    )
  }
  render() {
    return (this.state.editing) ? this.renderForm() : this.renderNote()
  }
}

export default Note;
