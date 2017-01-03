import React, { Component } from 'react'

class Test extends Component {
  render(){
    let result = this.props.members.map( (each, idx) => <li key={idx}>{each.name}</li> );
    console.log(result);
    return (<div>{result}</div>);
  }
}

export default Test
