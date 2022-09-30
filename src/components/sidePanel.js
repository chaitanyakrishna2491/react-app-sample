import React from 'react'
import { Link } from 'react-router-dom'
export default function SidePanel(props){

    return (
        <div>
            <Link to='/page1'>Page 1</Link>
            <br/>
            <Link to='/page2'>Page 2</Link>
        </div>
    )
}