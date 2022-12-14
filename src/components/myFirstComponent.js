import React, { useState, Component, useEffect } from 'react'
import axios from 'axios'

function MyFirstComponent(props){
    const [counterValue, setCounterValue] = useState(props.counter)
    const [firstName, setFirstName] = useState("Loading...")

    const myStyle = {
        color: "blue", 
        fontSize: "30px"
    }

    function increment(){
        setCounterValue(counterValue+1)
    }

    function decrement(){
        setCounterValue(counterValue-1)
    }

    useEffect(() => {
            axios.get('https://reqres.in/api/users/1').then((response) => {
                setFirstName(response.data.data.first_name)
            })
    },[counterValue])

    return (
        <div style={myStyle}>
            {/* Hello {firstName}!!! */}
            Hello {firstName}!!!
            ************my name is {props.name}!!!**********
            <br/>
            <input type="button" onClick={increment} value="Increment"></input><br/>
            <input type="button" onClick={decrement} value="Decrement"></input><br/>
            From myfirstcomp the coounter vale from props {counterValue}
        </div>
    )
}

// class MyFirstComponent extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             counterValue : props.counter,
//             sampleObj: {
//                 first_name:"Loading..."
//             }
//         }
//         this.increment = this.increment.bind(this)
//         this.decrement = this.decrement.bind(this)
//     }
    
//     decrement(){
//         this.setState({counterValue: --this.state.counterValue})
//     }

//     increment() {
//         this.setState({counterValue: ++this.state.counterValue})
//     }

//     componentDidMount(props){
//         setTimeout(() => {
//             axios.get('https://reqres.in/api/users/1').then((response) => {
//                 this.setState({sampleObj: response.data.data})
//             })
//         }, 5000)
//     }

//     render(){
//         return (
//             <div>
//                 Hello {this.state.sampleObj.first_name}!!!
//                 <br/>
//                 <input type="button" onClick={this.increment} value="Increment"></input><br/>
//                 <input type="button" onClick={this.decrement} value="Decrement"></input><br/>
//                 From myfirstcomp the coounter vale from props {this.state.counterValue}
//             </div>
//         )
//     }
// }

export default MyFirstComponent;