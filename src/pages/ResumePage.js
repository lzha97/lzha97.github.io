import React, {Component} from 'react'
import Header from '../Header'
import styles from './Resume.module.css'

class ResumePage extends Component{


    constructor(props){

        super(props);

    }

    render(){
        return <div className="container">
            
            <Header></Header>
            <div>
                <WorkExp></WorkExp>
                <Education></Education>
                
            </div>
        </div>
    }
}

function Entry(props){
    return <div> 
        <h4>{props.name}</h4>
        <p>{props.date}</p></div>
}

function Education(props){
    return <div className={styles.edu_section}>
        <h2>Education</h2>
        <Entry name="Columbia University" date="2016-2020"></Entry>
        <Entry name="Hong Kong University of Science and Technology" date="2019 Jan-June"></Entry>
        <Entry name="University of North Texas" date="2014-2016"></Entry>
    </div>
}

function WorkExp(props){
    return <div className={styles.work_section}>
        <h2>Work Experience</h2>
        <Entry name="Capital One" date="2019 Jun-Aug"></Entry>
        <Entry name="Azimo" date="2018 Jun-Aug"></Entry>
    </div>
}

function Skills(props){

    const skills = ['HTML', 'CSS', 'Python', 'SQL', 'Java', 'Mandarin', 'Linux', 'Microsoft Office', 'Research']
    return <div>
    <h2>Skills</h2>
    <LabelGroup labels = {skills}></LabelGroup>
    </div>
}
function LabelGroup(props){
    var labelArray = props.labels;
    return (
            labelArray.map(function(name, index){
            return <p key={index}>{name}</p>
            }
        )
        
    )
}
    

export default ResumePage