import React from 'react'
import { render } from 'react-dom'
import Test from './components/test.jsx'

const members = [{name:"벤"}, {name:"잭"}];

class App extends React.Component {
  listMembers(){
    return members;
  }

  render(){
    return (<div>
      <h1>hello world</h1>
      <ul>
        <Test members={members}/>
      </ul>
    </div>);
  }
}


render(<App/>, document.getElementById('App'));
