import React, { Component } from 'react'
import Map from '../Map'
import {Link} from 'react-router-dom'
import NavBar from '../NavBar'


export default function MapPage() {
    return (
        <div className="container">
            <h1> Map Page</h1>
            <NavBar></NavBar>
            <div>
            <Map />
            </div>

        </div>
    )
}