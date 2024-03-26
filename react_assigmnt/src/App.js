import './App.css';
import Todo from './components/todo';
//import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <h1>hiiiii</h1>
      <Routes>
      <Route path='/' element={<Todo/>}/>
        </Routes>
    </div>
  );
}

export default App;
