//import React, { Component } from 'react';
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

//class App extends Component {
const app = (props) => {
 const [personsState, setPersonsState] = useState({
    persons: [
      {name: "Manoj", age: 33},
      {name: "Max", age: 32},
      {name: "Manu", age: 31}
    ],
    otherState: 'some other value'
  });

  const [otherState] = useState('some other value')

  const switchNameHandler = () =>{
    console.log('Clicked!');
    setPersonsState({ persons: [
      {name: "Manoj2", age: 30},
      {name: "Max2", age: 32},
      {name: "Manu2", age: 31}
    ] })
  }

  console.log(personsState, otherState);

  //render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <hr/>
        
        <button onClick={switchNameHandler}>Click Here!</button>
        
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>        
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
          Just a text here!
        </Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>
          Just a text here!
        </Person>
      </div>
    );
  //}
}

export default app;


// switchNameHandler = () =>{
//   console.log('Clicked!');
  // this.setState({ persons: [
  //   {name: "Manoj2", age: 30},
  //   {name: "Max2", age: 32},
  //   {name: "Manu2", age: 31}
  // ] })
// }

// state = {
//   persons: [
//     {name: "Manoj", age: 33},
//     {name: "Max", age: 32},
//     {name: "Manu", age: 31}
//   ]
// }