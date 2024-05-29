import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './Exercise04';

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);
