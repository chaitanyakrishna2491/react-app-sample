import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header'
import Template2 from '../templates/template2'
import MySecondComponent from '../components/mySecondComponent'
export default function Page2(props){

    return (
        <Template2 header={Header}>
            <MySecondComponent></MySecondComponent>
        </Template2>
    )
}