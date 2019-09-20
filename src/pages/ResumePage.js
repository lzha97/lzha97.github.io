import React, {Component} from 'react'
import Header from '../Header'

class ResumePage extends Component{


    constructor(props){

        super(props);

    }

    render(){
        return <div className="container">
            
            <Header></Header>
            <Education></Education>
        </div>
    }
}

function School(props){
    return <div> 
        <h3>{props.name}</h3>
        <p>{props.date}</p></div>
}

function Education(props){
    return <div>
        <h1>Education</h1>
        <School name="Columbia University" date="2016-2020"></School>
        <School name="Hong Kong University of Science and Technology" date="2019 Jan-June"></School>
        <School name="University of North Texas" date="2014-2016"></School>
    </div>
}

export default ResumePage