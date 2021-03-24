import React, { Component } from 'react'
import axios from 'axios'
import classes from './District.css'
import { Redirect } from 'react-router-dom'

class District extends Component {

    state = {
        names: [],
        State: [],
        loading: true,
        error: 0
    }

    componentDidMount() {
        let fetchedDistricts = []
        axios.get('http://localhost:8080/district', {
            headers: {
                'token': sessionStorage.getItem('token')
            }
        })
            .then(response => {
                response.data.forEach((el) => {
                    fetchedDistricts.push(el)

                })
                console.log(fetchedDistricts)

                this.setState({ loading: false, names: fetchedDistricts })
            })
            .catch(error => {
                this.setState({ error: 1 })
            })
    }
    render() {
        return (
            <div>
                {
                    this.state.error ? <Redirect to='/auth' /> : this.state.names.map(el => {
                        return (
                            <div className={classes.Card}>
                                <h2>State - {el.state.name}</h2>
                                <h5>District - {el.name} </h5>
                            </div>
                        )


                    }

                    )}
            </div>
        )
    }
}

export default District