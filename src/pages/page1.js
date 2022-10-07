import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header'
import Template1 from '../templates/template1'
import App from '../App'
export default function Page1(props){

    return (
        <Template1 header={Header}>
            <App></App>
        </Template1>
    )
}