import React, { Component } from 'react'
import classes from './newChild.css'
import axios from 'axios'

class Form extends Component {


    state = {
        stateNames: [],
        districtNames: [],
        loading: true,
        error: 0,
        submitForm: 0,
        name: '',
        gender: '',
        motherName: '',
        fatherName: '',
        dob: '',
        state: '',
        district: ''

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
                this.setState({ loading: false, stateNames: fetchedStates })
            })
            .catch(error => {
                this.setState({ error: 1 })
            })

        let fetchedDistricts = []
        axios.get('http://localhost:8080/district', {
            headers: {
                'token': sessionStorage.getItem('token')
            }
        })
            .then(response => {
                response.data.forEach((el) => {
                    fetchedDistricts.push(el.name)
                })
                // console.log(fetchedDistricts)
                this.setState({ loading: false, districtNames: fetchedDistricts })
            })
            .catch(error => {
                this.setState({ error: 1 })
            })


    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log('Hi')
        axios.post('http://localhost:8080/children', {
            name: this.state.name,
            gender: this.state.gender,
            motherName: this.state.motherName,
            fatherName: this.state.fatherName,
            dob: this.state.dob,
            state: this.state.state,
            district: this.state.district
        }
        )
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

        console.log('data sent')
    }


    handleNameChange = (e) => {
        this.setState({ name: e.target.value })

    }
    handleGenderChange = (e) => {
        this.setState({ gender: e.target.value })
    }
    handleMNameChange = (e) => {
        this.setState({ motherName: e.target.value })
    }
    handleFNameChange = (e) => {
        this.setState({ fatherName: e.target.value })
    }
    handleDOBChange = (e) => {
        this.setState({ dob: e.target.value })
    }
    handleStateChange = (e) => {
        this.setState({ state: e.target.value })
    }
    handleDistrictChange = (e) => {
        this.setState({ district: e.target.value })
    }

    render() {


        return (

            <div className={classes.Card}>
                <form onSubmit={this.submitHandler}>
                    <label > Name: <input type="text" onChange={(e) => this.handleNameChange(e)} /> </label><br />
                    <label > Gender: <input type="text" onChange={(e) => this.handleGenderChange(e)} /> </label><br />
                    <label > Mother Name: <input type="text" onChange={(e) => this.handleMNameChange(e)} /> </label><br />
                    <label> Father Name: <input type="text" onChange={(e) => this.handleFNameChange(e)} /> </label><br />
                    <label> Date of Birth: <input type="text" onChange={(e) => this.handleDOBChange(e)} /> </label><br />
                    <label> State: <select name="states" id="states" onChange={(e) => this.handleStateChange(e)}>
                        {
                            this.state.stateNames.map(name =>
                                <option value={name}>{name}</option>
                            )
                        }
                    </select> </label><br />

                    <label> District: <select name="districts" id="districts" onChange={(e) => this.handleDistrictChange(e)}>
                        {
                            this.state.districtNames.map(name =>
                                <option value={name}>{name}</option>
                            )
                        }
                    </select> </label><br />






                    <input type="submit" value="Submit" />
                </form>
            </div>

        )
    }

}

export default Form
