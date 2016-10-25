Instructions for Creating To-Do App
======

Step One: Create the Note Component
------

You can use the file App.js for reference.

1. Create a file named src/Note.js
2. Import the React Library and App.css stylesheet into the Note.js file
3. Create a Note component.
4. Add a render() method to the Note component. Have it return an empty
   <div> with a className of 'note'
5. At the bottom of the Note.js file, export Note
6. Change index.js to import and render 'Note' instead of 'App'
7. run `npm start` to view your first component at `localhost:3000`. This will
   update as changes are made to the app.
8. Add any text or HTML you want inside the div. Put it inside a <p> element if
   you want it pre-styled.

We will add state to the Note component later, but there is another way to
create stateless components.

Step Two: Create a Stateless Banner Component
------

1. Create a Banner Component using the stateless functional syntax.
2. Create a <div> inside of the Banner component with className 'banner'
3. In public/index.html, add a <div> above the root <div>. Give it an id of
   'banner'
4. In src/index.js, render the Banner component.
