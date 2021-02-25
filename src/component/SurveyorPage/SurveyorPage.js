import React from 'react'
import classes from './SurveyorPage.css'


const SurveyorPage = (props) => {



    return (
        <div className={classes.Card}>
            <h5> Name - {props.name}</h5>
            <h5> Organization - {props.organization}</h5>
            <h5> Designation - {props.designation}</h5>
        </div>
    )
}

export default SurveyorPage