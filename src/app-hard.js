/* HARD: Now that you have a basic react app to display one person’s worth of information, 
now modify the app to iterate over an array of people’s basic information,
 while still keeping the new list of contacts in the top-level of state.
*/
import React, { Component } from 'react'
import BasicInfo from './basicInfo-hard.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      people: [
        {
          name: "Sheldon",
          age: 25,
          color: "Heaven"
        },
        {
          name: "Justku",
          age: 12,
          color: "Crazy Town"
        },
        {
          name: "Him",
          age: 100,
          color: "Himothy Way"
        },
        {
          name: "Alexia",
          age: 23,
          color: "GOATSville"
        },
        {
          name: "Justin",
          age: 2,
          color: "Sheldon's Shadow"
        },
        {
          name: "Megan",
          age: 30,
          color: "The Stallion"
        },
      ]
    }
  }
  render() {
    return (
      <div>
        <h1> Slightly less slight work </h1>
        <BasicInfo info={this.state} />
      </div>
    );
  }
}

/* export the component to be used in other components */
export default App;
