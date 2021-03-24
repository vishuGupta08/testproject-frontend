import React, { Component } from 'react'
import Rajya from '../../component/State/State'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
class State extends Component {

    state = {
        names: [],
        loading: true,
        error: 0
    }

    componentDidMount() {
        let fetchedStates = []
        axios.get('http://localhost:8080/state', {
            headers: {
                'token': sessionStorage.getItem('token')
            }
        })
            .then(response => {
                response.data.forEach((el) => {
                    fetchedStates.push(el.name)
                })
                console.log(fetchedStates)
                this.setState({ loading: false, names: fetchedStates })
            })
            .catch(error => {
                this.setState({ error: 1 })
            })
    }
    render() {
        return (
            <div>
                {
                    this.state.error ? <Redirect to='/auth' /> :
                        this.state.names.map(name =>
                            <Rajya
                                key={name}
                                value={name} />
                        )}
            </div>
        )
    }
}

export default State