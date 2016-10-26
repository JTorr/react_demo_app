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
3. In public/index.html, add a `<div>` above the root `<div>`. Give it an id of
   'banner'
4. In src/index.js, render the Banner component.

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

1. Add a getInitialState() function to the Note component.
  ```
  getInitialState() {
    return {editing: false}
  }
  ```
2. Add a `<span>` to the Note component with an Edit `<button>` and Delete
   `<button>` inside.
3. Add an onClick event to the button that calls an edit function.

  ```
  <button onClick={this.edit()}></button>
  ```
3. Create the edit() function on the Note component. It should set the state to
   editing: true.

   ```
   edit() {
     this.setState({editing: true})
   }
   ```

Step Five: Add Ability to Save Updated Note Text
------

1. Create a save() function. It should change the editing state back to false
2. Rename the render() function to renderNote()
3. Create a renderForm() function. It should return a `<div>` with a `<textarea>` and a `<button>` that `onClick`, calls `this.save`.
4. Create a new render() function that returns this.renderForm() if `this.state.editing` is true, or this.renderNote() if false.
5. Add a reference to allow retrieval of the user's input in the text area: `<textarea ref="newText">`
6. Modify the getInitialState() function to return `{editing: false, text:
   this.props.children}`
7. Change the `<p>` element inside of renderNote() to display `this.state.text`
   instead of `this.props.children`
8. Inside the save() function, set state.text to whatever was entered in the
   text field. That can be accessed with `this.refs.newText.value`.
