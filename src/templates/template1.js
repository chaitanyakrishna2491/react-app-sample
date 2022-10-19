import React, { useState } from 'react'
import Footer from '../components/footer'
import SidePanel from '../components/sidePanel'
import './template1.css'
export default function Template1(props){
    const [name, setName] = useState(props.name)
    function handleNameChange(event){
        setName(event.target.value)
        props.updateMyName(event.target.value)
    }
    return (
        <div>
            <div className='pageHeader'>
                <props.header></props.header>
            </div>
            <div className='pageSidePanel'>
                <SidePanel></SidePanel>
            </div>
            <div className='pageContainer'>
                {props.children}
                <div>
                    <input type="text" value={name} onChange={handleNameChange}/>
                    {name}
                </div>
            </div>
            <div className='pageFooter'>
                <Footer/>
            </div>
        </div>
    )
}