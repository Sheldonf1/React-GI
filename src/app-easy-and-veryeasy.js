/*  Very Easy:
     Inside of your ‘App’ class ‘render’ method, return a div with your
      basic information for example name, number, date of birth and etc. 
     This div should be hard-coded to prepare for the Medium Challenge.

     --------------------------------------------------------------------
  EASY: Create a ‘constructor’ that takes in ‘props’ , call the ‘super()’ method, 
  and set ‘this.state’ to an empty object inside of the ‘App’ class. 
  Inside of ‘this.state’ create a ‘person’ property and set it to an empty object
*/
import React, { Component } from 'react'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Easy
      person:
      {
      }
    };
  }
  render() {
    return (
      <div>
        <h1> This is slight work </h1>
        <ul>
          <li>My name is Sheldon aka sGod</li>
          <li>I am 25 years old</li>
          <li>My favorite color is clear</li>
        </ul>
      </div>
    );
  }
}

/* export the component to be used in other components */
export default App;
