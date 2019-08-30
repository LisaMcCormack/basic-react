import React from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './Name'
import People from './People'


const App = () => {
  const people = [  {
      name: 'Ricky',
      age: 34,
      sex: 'male'
    },   {
        name: 'Chris',
        age: 35,
        sex: 'male'
      }];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Name />
      <People list={people}/>
    </div>
  );
}

export default App;
