import React from 'react'
import { Link } from 'react-router-dom'
export default function Page1(props){

    return (
        <div>
            <Link to='/'>Back</Link>
            <a href="http://localhost:3000/">anchor back</a>
            This is Page 1
        </div>
    )
}