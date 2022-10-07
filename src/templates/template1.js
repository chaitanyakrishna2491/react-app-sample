import React from 'react'
import Footer from '../components/footer'
import SidePanel from '../components/sidePanel'
import './template1.css'
export default function Template1(props){

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
            </div>
            <div className='pageFooter'>
                <Footer/>
            </div>
        </div>
    )
}