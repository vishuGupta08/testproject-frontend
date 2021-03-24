import React, { useEffect, useState } from 'react'
import axios from 'axios'
import classes from '../District/District.css'
import { Redirect } from 'react-router-dom'

function childDetail(props) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(0);


    useEffect(() => {
        let { id } = props.match.params
        let fetchedData = []
        axios.get('http://localhost:8080/children/' + id, {
            headers: {
                'token': sessionStorage.getItem('token')
            }
        })
            .then(response => {
                // console.log(response.data)
                // for (let el of Object.entries(response.data)) {
                //     fetchedData.push(el)
                // }
                response.data.forEach((el) => {
                    fetchedData.push(el)

                })
                console.log(fetchedData)
                setData(fetchedData)
            })
            .catch(error => {
                console.log(error)
                setError(1)
            })
    }, []);

    return (

        <div className={classes.Card}>
            {
                error ? <Redirect to='/auth' /> : data.map(el => {
                    return (
                        <div >
                            <h5>   Name - {el.name}</h5>
                            <h5>Gender - {el.gender}</h5>
                            <h5>Mother Name - {el.motherName}</h5>
                            <h5>Father Name - {el.fatherName}</h5>
                            <h5>Date of Birth - {el.dob}</h5>
                            <h5>State - {el.state.name}</h5>
                            <h5>District - {el.district.name}</h5>
                        </div>
                    )


                }

                )}
        </div>
    )

}

export default childDetail