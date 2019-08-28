import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../styles/HomePage.css"
import my_photo from "../assets/my_photo.jpg" 

export default function HomePage(){
    return (
        <div className="container">
            <h1> Home Page</h1>
            <p>
                <Link to='/'>About Me</Link>
            </p>
            <p>
                <Link to='/map'>Where I've Been</Link>
            </p>
            
            <div>
                <img className="profile-pic" src={my_photo}></img>
            </div>
        </div>
    )
}