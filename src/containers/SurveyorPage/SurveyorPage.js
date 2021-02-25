import React, { Component } from 'react'

import axios from 'axios'
import Surveyor from '../../component/SurveyorPage/SurveyorPage'


class SurveyorPage extends Component {



    state = {
        name: '',
        organization: '',
        designation: '',
        loading: true
    }

    componentDidMount() {
        let surveyorName = ''
        let surveyorDesignation = ''
        let surveyorOrganization = ''
        axios.get('http://localhost:8080/')
            .then(response => {
                surveyorName = response.data[0].name
                surveyorDesignation = response.data[0].designation
                surveyorOrganization = response.data[0].organization
                this.setState({ loading: false, name: surveyorName, organization: surveyorOrganization, designation: surveyorDesignation })
            })
            .catch(error => {
                this.setState({ loading: false })
            })
    }


    render() {
        return (
            <Surveyor name={this.state.name} organization={this.state.organization} designation={this.state.designation} />
        )
    }
}

export default SurveyorPage