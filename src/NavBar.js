import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
    <div>
        <p>
            <Link to="/">About Me</Link>
        </p>
        <p>
            <Link to="/map">Where I've Been</Link>
        </p>
        <p>
            <Link to="/portfolio">Art Portfolio</Link>
        </p>
        <p>
            <Link to='/'>Books I Enjoyed</Link>
        </p>
    </div>
    )
}