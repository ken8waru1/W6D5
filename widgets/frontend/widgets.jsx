import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  function Root() {
    <div>
      <Clock />
    </div>
  }

  // const arr1 = ["one", "two", "three"];
  // const arr2 = ["I am the first", "Second pane here", "Third pain here"];

  const panes = [
    { title: "One", content: "I am the first" },
    { title: "Two", content: "Second pane here" },
    { title: "Three", content: "Third pane here" }
  ]

  ReactDOM.render(<Clock />, root);
  ReactDOM.render(<Tabs panes ={panes} />, root);
});