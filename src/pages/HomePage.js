import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../styles/HomePage.css"
import my_photo from "../assets/my_photo.jpg"
import NavBar from '../NavBar' 

export default function HomePage(){
    return (
        <div className="container">
            <h1> Home Page</h1>
            <NavBar></NavBar>
            <div>
                <img className="profile-pic" src={my_photo}></img>
            </div>
        </div>
    )
}