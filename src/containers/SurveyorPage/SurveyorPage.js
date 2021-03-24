import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Surveyor from '../../component/SurveyorPage/SurveyorPage'


class SurveyorPage extends Component {



    state = {
        name: '',
        organization: '',
        designation: '',
        loading: true,
        error: 0
    }

    componentDidMount() {
        let surveyorName = ''
        let surveyorDesignation = ''
        let surveyorOrganization = ''
        axios.get('http://localhost:8080/', {
            headers: {
                'token': sessionStorage.getItem('token')
            }
        })
            .then(response => {
                surveyorName = response.data[0].name
                surveyorDesignation = response.data[0].designation
                surveyorOrganization = response.data[0].organization
                this.setState({ error: 0, loading: false, name: surveyorName, organization: surveyorOrganization, designation: surveyorDesignation })
            })
            .catch(error => {
                this.setState({ error: 1 })
            })
    }


    render() {
        return (
            this.state.error ? <Redirect to='/auth' /> :
                <Surveyor name={this.state.name} organization={this.state.organization} designation={this.state.designation} />
        )
    }
}

export default SurveyorPage