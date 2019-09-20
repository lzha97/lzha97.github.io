import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../styles/HomePage.css"
import my_photo from "../assets/my_photo.jpg"
import Header from '../Header'

export default function HomePage(){
    return (
        <div className="container">
            <Header></Header>
            <div style = {{display: 'flex'}}>
                <img className="profile-pic" src={my_photo}></img>
                <p style = {{padding: "15% 0px 15% 50px", height:400}}>
                    Hi, I'm Lillian. 
                    <br></br> 
                    Currently an undergraduate senior at Columbia's school of engineering.
                    <br></br>
                    I am majoring in Computer Science
                    <br></br> 
                    I enjoy travelling, jigsaw puzzles, Japanese novels, and cooking. 
                    </p>
            </div>
            
        </div>
    )
}