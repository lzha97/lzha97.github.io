import React, { Component } from 'react'
import Map from '../Map'
import {Link} from 'react-router-dom'
import Header from '../Header'


export default function MapPage() {
    return (
        <div className="container">
            <Header></Header>
            
            <Map />
            

        </div>
    )
}