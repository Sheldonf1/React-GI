import React, { Component } from 'react'
class BasicInfo extends Component{
  render(){
    //Create an array of ul elements contatining each elements data
    //of the passed in array
    const personList = this.props.info.people.map((person,key)=>{
        return(
        <ul key={key}>
          <li>My name is {person.name}</li>
          <li>I am {person.age} years old</li>
          <li>I live in {person.state}</li>
        </ul>
      );
      });

    return (
      //React can render an array of JSX elements
      personList
    )
  }
}

export default BasicInfo;
