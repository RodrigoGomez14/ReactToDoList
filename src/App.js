import React from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './components/Task'
import ToDoList from './Pages/ToDoList'
import 'bootstrap/dist/css/bootstrap.css'


function App() {
  return (
    <div className="wrap pt-4">
      <ToDoList/>
    </div>
  );
}

export default App;
