import React, { Component } from 'react'
import Map from '../Map'
import {Link} from 'react-router-dom'


export default function MapPage() {
    return (
        <div className="container">
            <h1> Map Page</h1>
            <p>
            <Link to="/">About Me</Link>
            </p>
            <br></br>
            <Map />

        </div>
    )
}