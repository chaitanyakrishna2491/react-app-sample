import React, { useState } from 'react'

function MyFirstComponent(props){
    const [counterValue, setCounterValue] = useState(props.counter)

    function increment(){
        setCounterValue(counterValue+1)
    }

    function decrement(){
        setCounterValue(counterValue-1)
    }

    return (
        <div>
            Hello {props.uname}!!!
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

//     render(){
//         return (
//             <div>
//                 Hello {this.props.uname}!!!
//                 <br/>
//                 <input type="button" onClick={this.increment} value="Increment"></input><br/>
//                 <input type="button" onClick={this.decrement} value="Decrement"></input><br/>
//                 From myfirstcomp the coounter vale from props {this.state.counterValue}
//             </div>
//         )
//     }
// }

export default MyFirstComponent;