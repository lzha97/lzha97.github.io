import React, {Component} from 'react'
import NavBar from './NavBar'

export default function Header(){

    const header_style = {
        fontFamily: "Sacramento",
    }
    return <div style={{display:'flex', flexDirection:'column', width:'64%', justifyContent:'center',alignItems:'center', marginBottom:'5%'}}>
        
        <h1 style = {header_style}> 
            Lillian Zha
        </h1>
        
        <NavBar>
        </NavBar>
    
    </div>
}