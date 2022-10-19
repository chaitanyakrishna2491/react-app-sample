import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import MyFirstComponent from './components/myFirstComponent';
import './App.css';

// class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//       counter: 0,
//       jobStatus: "initiated"
//     }
//   }
  
//   render() { //lifecycle methods
//     return (
//       <div>
//       <div className="App">
//         ------------------id : {this.props.id}
//         <MyFirstComponent name={this.props.name} uname={"User"} counter={this.state.counter}/>
//         <div>
//           From App comp Counter: {++this.state.counter}
//         </div>
//       </div>
//       <span style={{color:"red", fontSize: "24px"}}>ghgjg</span>
//       </div>
//     );
//   }
// }

function App(props){
  let username = "Javascript"
  const [counter, setCounter] = useState(0)
  const [jobStatus, setJobStatus] = useState("initiated") 
  const [employeeList,setEmployeeList] = useState([{
    id: 1,
    name: "Item1",
    dept: "Department1"
  },
  {
    id: 2,
    name: "Item2",
    dept: "Department2"
  },
  {
    id: 3,
    name: "Item3",
    dept: "Department3"
  },
  {
    id: 4,
    name: "Item4",
    dept: "Department3"
  }])
  const handleDelete = (event) => {
    console.log(event.target.dataset.id)
    // setEmployeeList(employeeList.filter((employee) => {
    //   if(employee.id != event.target.dataset.id)
    //   return employee;
    // }))
  }
  return (
    <div>
      <div className="App">
        ------------------id : {props.id}
        <MyFirstComponent name={props.name} uname={"User"} counter={counter}/>
        <div>
          {/* From App comp Counter: {setCounter(counter+1)} */}
        </div>
      </div>
      <span style={{color:"red", fontSize: "24px"}}>ghgjg</span>
      <table>
        <thead>
          <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
          <th></th>
          </tr>
        </thead>
        <tbody>
          {
            employeeList.map((employee) => {
              return (
                <tr key={"employee-id-"+employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.dept}</td>
                  <td>
                    <button data-id={employee.id} >Add</button>
                    <button data-id={employee.id} onClick={handleDelete}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      </div>
  );
}

export default App;
