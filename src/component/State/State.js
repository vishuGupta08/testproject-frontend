import React from 'react'
import classes from './State.css'


const State = (props) => {



    return (
        <div className={classes.Card}>
            <h5> {props.value}</h5>
        </div>
    )
}

export default State