import React, { Component } from 'react'
import axios from 'axios'
import classes from './District.css'

class District extends Component {

    state = {
        names: [],
        State: [],
        loading: true
    }

    componentDidMount() {
        let fetchedDistricts = []
        axios.get('http://localhost:8080/district')
            .then(response => {
                response.data.forEach((el) => {
                    fetchedDistricts.push(el)

                })
                console.log(fetchedDistricts)

                this.setState({ loading: false, names: fetchedDistricts })
            })
            .catch(error => {
                this.setState({ loading: false })
            })
    }
    render() {
        return (
            <div >
                {this.state.names.map(el => {
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