import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'

export default class NavBar extends Component {
    render(){
        return (

        <div className = {styles.nav}>
            <p>
                <Link to="/" className={styles.menu_opt}>About Me</Link>
            </p> 
            <p >
                <Link to="/resume" className={styles.menu_opt} >Resume</Link>
            </p>
            <p className="menu_opt" >
                <Link to="/map" className={styles.menu_opt}>Where I've Been</Link>
            </p>
            <p className="menu_opt" >
                <Link to="/portfolio" className={styles.menu_opt}>Art Portfolio</Link>
            </p>
        
        </div>
        )
}
    
}