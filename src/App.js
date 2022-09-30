import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyFirstComponent from './components/myFirstComponent';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      counter: 0,
      jobStatus: "initiated"
    }
  }
  
  render() { //lifecycle methods
    return (
      <div>
      <div className="App">
        <MyFirstComponent uname={"User"} counter={this.state.counter}/>
        <div>
          From App comp Counter: {++this.state.counter}
        </div>
      </div>
      <span style={{color:"red", fontSize: "24px"}}>ghgjg</span>
      </div>
    );
  }
}

// function App(props){
//   let username = "Javascript"
//   return (
//     <div>
//       <MyFirstComponent uname={"User"}/>
//     </div>
//   );
// }

export default App;
