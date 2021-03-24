import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class logout extends Component {
    state = {
        loggedIn: 1
    }

    componentDidMount() {
        axios.get('http://localhost:8080/auth/logout')
            .then(res => {
                console.log(res.data)
                sessionStorage.removeItem('token')
                this.setState({ loggedIn: 0 })
            })
            .catch(err => {
                console.log(err)
            })
    }


    // this.props.onAuth(this.state.controls.username.value, this.state.controls.password.value)



    render() {
        return (
            <div>
                <h1>{!this.state.loggedIn ? <Redirect to='/' /> : 'Not logged Out'}</h1>
            </div>
        )


    }

}

export default logout