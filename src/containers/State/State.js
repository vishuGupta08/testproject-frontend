import React, { Component } from 'react'
import Rajya from '../../component/State/State'
import axios from 'axios'
class State extends Component {

    state = {
        names: [],
        loading: true
    }

    componentDidMount() {
        let fetchedStates = []
        axios.get('http://localhost:8080/state')
            .then(response => {
                response.data.forEach((el) => {
                    fetchedStates.push(el.name)
                })
                console.log(fetchedStates)
                this.setState({ loading: false, names: fetchedStates })
            })
            .catch(error => {
                this.setState({ loading: false })
            })
    }
    render() {
        return (
            <div>
                {this.state.names.map(name =>
                    <Rajya
                        key={name}
                        value={name} />
                )}
            </div>
        )
    }
}

export default State