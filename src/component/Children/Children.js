import axios from 'axios'
import React from 'react'
import classes from './Children.css'



// Declare a new state variable, which we'll call "count"



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
        else if (childDetail === '_id') {
            childDetails.push({ _id: props.details[childDetail]._id })
        }

    }

    // console.log(childDetails)




    const childDetailOutput = childDetails.map(cd => {
        return (
            <span> {cd.name},{cd.motherName}{cd.fatherName}{cd.dob}{cd.state}{cd.district} </span>
        )
    })

    const deleteHandler = () => {
        // console.log(props.details._id)
        // console.log('http://localhost:8080/children/' + props.details._id)
        axios.delete('http://localhost:8080/children/' + props.details._id, {
            headers: {
                'token': sessionStorage.getItem('token')
            }
        })
            .then(res => {
                console.log(res);

            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className={classes.Card}>
            {childDetailOutput}
            <button onClick={deleteHandler}>X</button>

        </div>



    )
}

export default Children