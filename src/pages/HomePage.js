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
                <p style = {{padding: 100}}>Hi, I'm Lillian. Currently a undergraduate senior at Columbia's school of engineering. I enjoy travelling, art and reading.</p>
            </div>
            
        </div>
    )
}