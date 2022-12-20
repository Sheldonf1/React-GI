/* MEDIUM: Replace all of the hard-coded with data from ‘this.state.person’ in the constructor. 
 Then take the returned ‘div’ and create a component, pass state into it and import it as ‘BasicInfo’.
  (This challenge should not change the look of the page)

*/
import React, { Component } from 'react'
import BasicInfo from './basicInfo-medium.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      person:
      {
        name: "Sheldon",
        age: 25,
        color: "Clear"
      }
    };
  }
  render() {
    return (
      <div>
        <h1> Medium </h1>
        <BasicInfo info={this.state} />
      </div>
    );
  }
}

/* export the component to be used in other components */
export default App;
