import React, { Component } from 'react';
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
      <div className="App">
        <MyFirstComponent uname={"User"} counter={this.state.counter}/>
        <div>
          From App comp Counter: {++this.state.counter}
        </div>
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
