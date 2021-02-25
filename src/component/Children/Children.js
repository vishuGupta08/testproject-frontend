import React from 'react'
import classes from './Children.css'


const Children = (props) => {

    const childDetails = []
    for (let childDetail in props.details) {
        if (childDetail === 'name') {
            childDetails.push({ name: props.details[childDetail] })
        } else if (childDetail === 'image') {
            childDetails.push({ image: props.details[childDetail] })
        }
        else if (childDetail === 'motherName') {
            childDetails.push({ motherName: props.details[childDetail] })
        } else if (childDetail === 'fatherName') {
            childDetails.push({ fatherName: props.details[childDetail] })
        } else if (childDetail === 'dob') {
            childDetails.push({ dob: props.details[childDetail] })
        } else if (childDetail === 'state') {
            childDetails.push({ state: props.details[childDetail].name })
        }
        else if (childDetail === 'district') {
            childDetails.push({ district: props.details[childDetail].name })
        }
    }

    console.log(childDetails)

    const childDetailOutput = childDetails.map(cd => {
        return (
            <span> {cd.name},{cd.motherName}{cd.fatherName}{cd.dob}{cd.state}{cd.district} </span>
        )
    })
    return (
        <div className={classes.Card}>
            {childDetailOutput}
        </div>
    )
}

export default Children