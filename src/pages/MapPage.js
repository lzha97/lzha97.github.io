import React, { Component } from 'react'
import Map from '../Map'
import {Link} from 'react-router-dom'

export default function MapPage() {
    return (
        <div className="container">
            <Link to="/">Home</Link>
            <br></br>
            <Map />

        </div>
    )
}