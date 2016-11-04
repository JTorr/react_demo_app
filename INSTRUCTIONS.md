Instructions for Creating To-Do App
======

Step One: Create the Note Component
------

You can use the file App.js for reference.

1. Create a file named src/Note.js
2. Import the React Library and App.css stylesheet into the Note.js file
3. Create a Note component.
4. Add a render() method to the Note component. Have it return an empty
   `<div>` with a className of 'note'
5. At the bottom of the Note.js file, export Note
6. Change index.js to import and render 'Note' instead of 'App'
7. run `npm start` to view your first component at `localhost:3000`. This will
   update as changes are made to the app.
8. Add an `<h1>` tag and place some text inside. The styles from App.css will be
   applied when it's rendered.

We will add state to the Note component later, but now let's create a component
that will remain stateless.

Step Two: Create a Stateless Banner Component
------

1. Create a Banner Component using the stateless functional syntax.
2. Create a `<div>` inside of the Banner component with className 'banner'

   ```
   import React from 'react';
   import './App.css';

   const Banner = () => {
     return (
       <div className="banner">
       </div>
     )
   };

   export default Banner;
   ```
3. In public/index.html, add a `<div>` above the root `<div>`. Give it an id of
   'banner'
4. In src/index.js, render the Banner component.

   ```
   import Banner from './Banner';
   ...
   ReactDOM.render(
     <Banner />,
     document.getElementById('banner')
   );
   ```

Step Three: Make the Note Component Reusable
------

These steps allow you to use the same component for Notes with different text.

1. Instead of having static text in the Note component, change it to
   {this.props.text}
2. In index.js, render 2 different Note components, each with a prop called
   text. Make the text different for each of the 2 notes.
3. Change the Note component to have an opening and closing tag instead of just
   a closing tag. <Note></Note> instead of </Note>
4. Place some text between the opening and closing `<Note>` tags. Make each note
   different.
4. Inside the Note component, place a paragraph with <p>{this.props.children}</p>

   Example of index.js:
   ```
   ReactDOM.render(<MyComponent myProp="the value of the prop">The text you want
   in the paragraph tag.</MyComponent>,
   document.getElementById('root'))
   ```

Step Four: Add Ability to Edit Note Text
------

1. Create a constructor in the Note component and set the intial state to `{editing: false}`.

  ```
  class Note extends Component {
    constructor() {
      super();
      this.state = {
        editing: false
      }
    }
    ...
  }
  ```

2. Add a `<p>` tag in the Note Component with some text, and a `<span>` with an Edit `<button>` inside.

   ```
   <p>Some Initial Text</p>
   <span>
     <button>EDIT</button>
   </span>
   ```
3. Create the edit() function on the Note component. It should set the state to
   editing: true. You can also add an alert, to verify that edit funtion is
   called.

   ```
   edit() {
     alert('editing')
     this.setState({editing: true})
   }
   ```
4. In the constructor, bind `this` in the edit() function to the component instance.

  ```
  constructor() {
    super();
    this.edit = this.edit.bind(this);
    ...
  }
  ```

5. Add an onClick event to the button that calls an edit function.

  ```
    <button onClick={() => this.edit()}>EDIT</button>
  ```


Step Five: Add Ability to Save Updated Note Text
------

1. Create a save() function. It should change the editing state back to false
2. Rename the render() function to renderNote()
3. Create a renderForm() function that will be displayed when Edit is clicked.
   It should return a div with a `textarea` and a Save button.

  ```
  renderForm() {
    return (
      <div className="note">
        <textarea></textarea>
        <button>Save</button>
      </div>
        )
  }
  ```
4. Create a new render() function that returns this.renderForm() if `this.state.editing` is true, or this.renderNote() if false.

  ```
  render() {
    return (this.state.editing) ? this.renderForm() : this.renderNote()
  }
  ```
5. Add an onClick event to that calls save() to the button in renderForm()
6. Add a reference to allow retrieval of the user's input in the text area: `<textarea ref="newText">`
7. In the constructor, call `super(props)` instead of `super()`. This will give
   you access to `this.props` in the constructor.

   ```
   constructor(props) {
     super(props);
     ...
    }
   ```

8. Define a prop called `text` in in `index.js` where the Note is rendered.

   ```
   ReactDOM.render(
     <Note text="Initial text"></Note>,
     document.getElementById('root')
   );
   ```
9. Change the `<p>` element inside of renderNote() to display `this.state.text`
   instead of static text.

    ```
    renderNote() {
      return (
        <div className="note">
          <h1>My Text</h1>
          <p>{this.state.text}</p>
        ...
    ```
10. Update the initial state to reference `this.props.text`.

   ```
    this.state = {
      editing: false,
      text: this.props.text
    }
   ```
11. Inside the save() function, set state.text to whatever was entered in the
   text field. That can be accessed with `this.refs.newText.value`.

   ```
   save() {
     this.setState({editing: false, text: this.refs.newText.value})
   }
   ```
12. Remove the `alert` from your edit function. You can now edit the Note's
    text.
