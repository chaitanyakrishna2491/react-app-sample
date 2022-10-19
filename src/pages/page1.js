import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Header from '../components/header'
import Template1 from '../templates/template1'
import App from '../App'
export default function Page1(props){
    const [myName, setMyname] = useState("JAVASCRIPT")
    const {search} = useLocation()
    const id = new URLSearchParams(search).get('id');

    return (
        <React.Fragment>
        <div>
            {myName}
            <Template1 header={Header} name={myName} updateMyName={setMyname}>
                <App name={myName} id={id}></App>
            </Template1>
        </div>
        <div>
            Sammple text
        </div>
        </React.Fragment>
    )
}